<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // ...
        
        // Cargar rutas WEB
        Route::middleware('web')
            ->group(base_path('routes/web.php'));

        // Cargar rutas API (El bloque clave para tu problema 404)
        Route::prefix('api')
            ->middleware('api')
            ->group(base_path('routes/api.php'));
    }
}
