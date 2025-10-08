<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Favoritos extends Model
{
    use HasFactory;
    protected $table = 'favoritos'; 
    protected $fillable = [
        'usuario_id', 
        'favoritable_id', 
        'favoritable_type' 
    ];
    public function favoritable()
    {
        return $this->morphTo();
    }
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }
}