<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable 
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'usuarios'; 

    protected $fillable = [
        'nombre_completo',
        'email',
        'password',
        'avatar', 
        'banner',
        'rol',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed', 
    ];
    
    public function comentarios()
    {
        return $this->hasMany(Comentario::class, 'usuario_id');
    }

    public function favoritos()
    {
        return $this->hasMany(Favorito::class, 'usuario_id'); 
    }
}
