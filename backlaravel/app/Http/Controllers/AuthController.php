<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function checkCredentials(Request $request)
{
    // Validation des champs
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    // Rechercher l'utilisateur avec l'email
    $user = User::where('email', $request->email)->first();

    if ($user && $user->password === $request->password) {
        // Mot de passe correct
        return response()->json([
            'status' => 'success',
            'message' => 'Connexion réussie !',
        ], 200);
    } else {
        // Mot de passe ou email incorrect
        return response()->json([
            'status' => 'error',
            'message' => 'Email ou mot de passe incorrect.',
        ], 200);
    }
}
}