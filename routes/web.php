<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// 1. (BARU) Impor ChatController
use App\Http\Controllers\ChatController;

// Halaman Cover (Splash Screen) - Tanpa Layout Utama
Route::get('/', function () {
    return Inertia::render('Cover');
});

/*
 * Grup Halaman dengan Layout Utama
*/

// Halaman Utama (Opening)
Route::get('/opening', function () {
    return Inertia::render('Opening');
})->name('opening');

// Halaman Salam
Route::get('/salam', function () {
    return Inertia::render('Salam');
})->name('salam');

// Halaman Groom
Route::get('/groom', function () {
    return Inertia::render('Groom');
})->name('groom');

// Halaman Bride
Route::get('/bride', function () {
    return Inertia::render('Bride');
})->name('bride');

// Halaman Akad
Route::get('/akad', function () {
    return Inertia::render('Akad');
})->name('akad');

// Halaman Resepsi
Route::get('/resepsi', function () {
    return Inertia::render('Resepsi');
})->name('resepsi');

// Halaman Maps
Route::get('/maps', function () {
    return Inertia::render('Maps');
})->name('maps');


// 2. (DIPERBARUI) Halaman RSVP (Sekarang menggunakan ChatController)
Route::get('/rsvp', [ChatController::class, 'index'])->name('rsvp');

// 3. (BARU) Rute untuk mengirim pesan
Route::post('/rsvp', [ChatController::class, 'store'])->name('chat.store');


// Halaman Gift
Route::get('/gift', function () {
    return Inertia::render('Gift');
})->name('gift');

// Halaman LoveStory
Route::get('/lovestory', function () {
    return Inertia::render('LoveStory');
})->name('lovestory');

// Halaman Quotes
Route::get('/quotes', function () {
    return Inertia::render('Quotes');
})->name('quotes');

// Halaman Gallery
Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');

// Halaman Tanks (Thanks)
Route::get('/tanks', function () {
    return Inertia::render('Tanks');
})->name('tanks');

