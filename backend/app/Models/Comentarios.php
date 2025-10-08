<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Comentarios extends Model
{
    use HasFactory;
    protected $table = 'comentarios';
    protected $fillable = [
        'contenido', 
        'usuario_id', 
        'comentable_id', 
        'comentable_type', 
    ];
    public function comentable()
    {
        return $this->morphTo();
    }
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }
}