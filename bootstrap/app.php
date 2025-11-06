<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
// Impor middleware Inertia
use App\Http\Middleware\HandleInertiaRequests;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Tambahkan middleware Inertia ke grup 'web'
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);

        // (Middleware lain bisa ditambahkan di sini jika perlu)
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
