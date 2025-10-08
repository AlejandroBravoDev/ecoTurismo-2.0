<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Hospedajes; 
class HospedajeController extends Controller
{
    public function index() 
    {
        $hospedajes = Hospedajes::all(); 
        return response()->json($hospedajes); 
    }
}
?>