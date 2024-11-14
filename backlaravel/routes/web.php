<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/', function () {
    return view('index'); // Affiche la vue index.blade.php
});

require __DIR__.'/auth.php';
