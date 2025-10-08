<?php
namespace App\Http\Controllers;
use App\Models\Comentarios; 
use App\Models\Lugares;     
use App\Models\Hospedajes;   
use Illuminate\Http\Request;
class ComentariosController extends Controller
{
    public function index()
    {
        $comentarios = Comentarios::all(); 
        return response()->json($comentarios);
    }
    public function store(Request $request)
    {
        $request->validate([
            'contenido' => 'required|string|max:1000',
            'type' => 'required|in:lugar,hospedaje', 
            'id' => 'required|integer', 
        ]);
        $user = $request->user();
        $modelType = $request->type === 'lugar' ? Lugares::class : Hospedaje::class;
        $modelName = $request->type === 'lugar' ? 'Lugar' : 'Hospedaje';
        $comentable = $modelType::find($request->id);
        if (!$comentable) {
            return response()->json(['message' => "$modelName no encontrado."], 404);
        }
        $comentario = $comentable->comentarios()->create([
            'contenido' => $request->contenido,
            'usuario_id' => $user->id, 
        ]);
        return response()->json([
            'message' => 'Comentario creado con éxito.', 
            'comentario' => $comentario
        ], 201);
    }
}
   
    

    
