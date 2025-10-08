<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Storage; // ⬅️ IMPORTANTE: Necesario para guardar archivos
use Illuminate\Validation\Rule; // ⬅️ IMPORTANTE: Necesario para la validación unique
use App\Models\Usuario; 
// Si existen los modelos Comentario y Favorito, puedes importarlos para mayor claridad.
// use App\Models\Comentario; 
// use App\Models\Favorito; 


class PerfilController extends Controller
{
    /**
     * Muestra la información del usuario autenticado.
     */
    public function show(Request $request)
    {
        $usuario = $request->user();

        if (!$usuario) {
            return response()->json(['message' => 'No autenticado.'], 401);
        }

        // 🛑 MODIFICACIÓN CRÍTICA (TEMPORAL): COMENTAMOS LA LÍNEA QUE CAUSA EL ERROR 500
        // Una vez que el perfil cargue, corregiremos las relaciones en Usuario.php
        // $usuario->load('comentarios', 'favoritos'); 

        // NOTA: Para que React muestre los contadores de favoritos y opiniones,
        // necesitamos devolver esos campos, aunque sean un array vacío temporalmente.
        $usuario->comentarios = []; // Array vacío temporal para evitar errores en frontend
        $usuario->favoritos = [];   // Array vacío temporal para evitar errores en frontend

        return response()->json([
            'usuario' => $usuario
        ], 200);
    }

    /**
     * Actualiza la información básica y las imágenes del perfil.
     */
    public function update(Request $request)
    {
        $usuario = $request->user();
        
        // 🛑 REGLAS DE VALIDACIÓN COMPLETAS (Ajustamos para imágenes y email)
        $request->validate([
            'nombre_completo' => 'sometimes|required|string|max:100',
            // El email debe ser único, excluyendo el ID del usuario actual
            'email' => ['sometimes', 'required', 'email', Rule::unique('usuarios', 'email')->ignore($usuario->id)],
            
            // Reglas para la carga de archivos (máximo 2MB)
            'profilePictureFile' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'bannerFile' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        
        // Inicializar los datos a actualizar
        $data = $request->only('nombre_completo', 'email');
        
        // --- LÓGICA PARA SUBIDA DE AVATAR (PROFILE PICTURE) ---
        if ($request->hasFile('profilePictureFile')) {
            // Eliminar imagen anterior si existe
            if ($usuario->avatar) {
                Storage::disk('public')->delete($usuario->avatar);
            }
            // Guardar la nueva imagen en el disco 'public' (storage/app/public)
            $path = $request->file('profilePictureFile')->store('avatars', 'public');
            $data['avatar'] = $path;
        }

        // --- LÓGICA PARA SUBIDA DE BANNER ---
        if ($request->hasFile('bannerFile')) {
            // Eliminar imagen anterior si existe
            if ($usuario->banner) {
                Storage::disk('public')->delete($usuario->banner);
            }
            $path = $request->file('bannerFile')->store('banners', 'public');
            $data['banner'] = $path;
        }

        // 4. Actualizar el usuario
        $usuario->update($data);

        return response()->json([
            'message' => 'Perfil actualizado con éxito.',
            // El método 'fresh()' se asegura de devolver el usuario con las nuevas rutas de archivo
            'usuario' => $usuario->fresh() 
        ], 200);
    }
}