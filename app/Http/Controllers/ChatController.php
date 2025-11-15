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
        // 1. VALIDASI DIPERBARUI
        $data = $request->validate([
            'name' => 'required|string|max:100',
            'message' => 'required|string|max:500',
        ]);

        // 2. PENYIMPANAN DIPERBARUI
        $message = Message::create([
            'name' => $data['name'],
            'message' => $data['message'],
        ]);

        // 3. Siarkan event (Broadcasting)
        broadcast(new NewMessageSent($message))->toOthers();

        // 4. Redirect kembali ke halaman RSVP
        return redirect()->route('rsvp');
    }
}

