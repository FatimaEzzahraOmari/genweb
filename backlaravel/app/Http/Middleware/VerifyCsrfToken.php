<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Les URI qui devraient être exemptées de la vérification CSRF.
     *
     * @var array<int, string>
     */
    protected $except = [
        'api/login-check', // Ajoutez votre route ici
    ];
}
