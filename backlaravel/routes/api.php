<?php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;


Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    // Vos routes protégées ici
});



Route::post('/login-check', [AuthController::class, 'checkCredentials']);




