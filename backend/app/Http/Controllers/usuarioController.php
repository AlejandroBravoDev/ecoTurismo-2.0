<?php

namespace App\Http\Controllers;

use App\Models\Usuario; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Importar para manejar archivos

class UsuarioController extends Controller
{
    // Método que trae el perfil del usuario autenticado (Ruta: GET /api/perfil)
    public function show(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['message' => 'No autenticado.'], 401);
        }

        // Obtener los conteos de las relaciones
        // Usamos withCount para una consulta más eficiente.
        $user = Usuario::withCount(['comentarios', 'favoritos'])
                    ->find($user->id); 
        
        // Devolver la respuesta en la estructura plana que espera React
        return response()->json([
            'id' => $user->id,
            'nombre_completo' => $user->nombre_completo,
            'email' => $user->email,
            'avatar' => $user->avatar, 
            'banner' => $user->banner, 
            // Los counts se anexan automáticamente cuando usas withCount
            'opiniones_count' => $user->comentarios_count, // 🛑 Usar 'comentarios_count' como está en el modelo
            'favoritos_count' => $user->favoritos_count,
        ]);
    }

    // Método para actualizar los datos del usuario (Ruta: PUT /api/perfil)
    public function update(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['message' => 'No autenticado.'], 401);
        }

        $request->validate([
            'nombre_completo' => 'required|string|max:100',
            // Rule::unique verifica que el email no esté tomado por otro usuario
            'email' => ['required', 'string', 'email', \Illuminate\Validation\Rule::unique('usuarios')->ignore($user->id)],
        ]);

        $user->update($request->only('nombre_completo', 'email'));

        return response()->json([
            'message' => 'Perfil actualizado con éxito.',
            // Devolver los datos actualizados para que el frontend los use
            'nombre_completo' => $user->nombre_completo,
            'email' => $user->email,
        ]);
    }

    // Método para subir Avatar o Banner (Ruta: POST /api/perfil/imagen)
    public function uploadImage(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['message' => 'No autenticado.'], 401);
        }

        $request->validate([
            'image_type' => 'required|in:avatar,banner', // Debe ser 'avatar' o 'banner'
            'image_file' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB max
        ]);

        $type = $request->input('image_type');
        $file = $request->file('image_file');
        
        // 1. Guardar el archivo
        // El path se guarda en 'public/uploads/avatars' o 'public/uploads/banners'
        $path = $file->store("uploads/{$type}s", 'public');

        // 2. Opcional: Eliminar la imagen anterior para ahorrar espacio
        if ($user->{$type} && Storage::disk('public')->exists($user->{$type})) {
            Storage::disk('public')->delete($user->{$type});
        }

        // 3. Actualizar la ruta en la base de datos
        $user->{$type} = $path;
        $user->save();

        return response()->json([
            'message' => 'Imagen de ' . $type . ' actualizada.',
            $type => $path, // Devolver la nueva ruta para el frontend
        ]);
    }
    
    // Dejar el método index si lo necesitas para otras cosas (ej: admin)
    public function index()
    {
        $usuario = Usuario::all();
        return response()->json($usuario);
    }
}