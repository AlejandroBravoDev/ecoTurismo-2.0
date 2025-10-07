<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HospedajeController;
use App\Http\Controllers\LugaresController;
use App\Http\Controllers\municipiosController;
use App\Http\Controllers\usuarioController;

/*Apis*/ 
Route::get('/lugares', 'App\Http\Controllers\LugaresController@index');
Route::get('/hospedajes', 'App\Http\Controllers\HospedajeController@index');
Route::get('/municipios', 'App\Http\Controllers\municipiosController@index');
Route::get('/usuario', 'App\Http\Controllers\usuarioController@index');



// Esta es una ruta de prueba que Laravel incluye por defecto
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
?>