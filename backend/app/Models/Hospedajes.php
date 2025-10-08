<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Hospedajes extends Model
{
    use HasFactory;
    protected $table = 'hospedajes'; 
    protected $fillable = [
        'nombre',
        'ubicacion',
        'descripcion',
        'imagenes', 
    ];
    public function comentarios()
    {
        return $this->morphMany(Comentario::class, 'comentable');
    }
    public function favoritos()
    {
        return $this->morphMany(Favoritos::class, 'favoritable');
    }
}