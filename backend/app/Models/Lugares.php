<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Model;

class Lugares extends Model
{
    protected $table = 'lugares'; 

    protected $fillable = [
        'nombre',
        'descripcion',
        'ubicacion',
        'imagenes', 
        'recomendaciones',
    ];
    public function comentarios(): MorphMany
    {
        return $this->morphMany(Comentario::class, 'comentable'); 
    }
    public function favoritos(): MorphMany
{
    return $this->morphMany(Favoritos::class, 'favorable');
}
}
