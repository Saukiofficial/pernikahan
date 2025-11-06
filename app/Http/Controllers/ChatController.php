<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Events\NewMessageSent;

class ChatController extends Controller
{
    // Mengambil semua pesan untuk halaman RSVP
    public function index()
    {
        $messages = Message::orderBy('created_at', 'asc')->get();

        return Inertia::render('Rsvp', [
            'initialMessages' => $messages
        ]);
    }

    // Menyimpan pesan baru
    public function store(Request $request)
    {
        // 1. VALIDASI DIPERBARUI (menggunakan 'name' dan 'message')
        $data = $request->validate([
            'name' => 'required|string|max:100',
            'message' => 'required|string|max:500',
        ]);

        // 2. PENYIMPANAN DIPERBARUI (menggunakan 'name' dan 'message')
        $message = Message::create([
            'name' => $data['name'],
            'message' => $data['message'],
        ]);

        // 3. Siarkan event (Broadcasting)
        // Kita perlu memuat relasi (jika ada) atau memastikan data lengkap
        // Dalam kasus sederhana ini, $message sudah cukup
        broadcast(new NewMessageSent($message))->toOthers();

        // 4. Redirect kembali ke halaman RSVP
        // Inertia akan otomatis mengambil 'initialMessages' yang baru
        return redirect()->route('rsvp');
    }
}

