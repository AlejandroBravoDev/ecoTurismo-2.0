<?php
namespace App\Http\Controllers;
use App\Models\Lugares;    
use App\Models\Hospedajes;   
use Illuminate\Http\Request;
class FavoritosController extends Controller
{
    public function index()
    {
       $favoritos = Favoritos::all(); 
        return response()->json($favoritos);
    }
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:lugar,hospedaje',
            'id' => 'required|integer', 
        ]);
        $user = $request->user();
        if (!$user) return response()->json(['message' => 'No autenticado.'], 401);
        $modelType = $request->type === 'lugar' ? Lugares::class : Hospedaje::class;
        $modelName = $request->type === 'lugar' ? 'Lugar' : 'Hospedaje';
        $favoritable = $modelType::find($request->id);
        if (!$favoritable) {
            return response()->json(['message' => "$modelName no encontrado."], 404);
        }
        $exists = $user->favoritos()->where([
            'favoritable_type' => $modelType,
            'favoritable_id' => $request->id,
        ])->exists();
        if ($exists) {
            $user->favoritos()->where([
                'favoritable_type' => $modelType,
                'favoritable_id' => $request->id,
            ])->delete();
            return response()->json(['message' => 'Favorito eliminado con éxito.', 'added' => false], 200);
        }
        $favorito = $favoritable->favoritos()->create([
            'usuario_id' => $user->id, 
        ]);
        return response()->json([
            'message' => 'Favorito añadido con éxito.', 
            'added' => true,
            'favorito' => $favorito
        ], 201);
    }
}
   
    

    
