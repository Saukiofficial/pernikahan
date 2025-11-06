<?php

namespace App\Events;

use App\Models\Message;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewMessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Buat instance event baru.
     * Kita menggunakan constructor property promotion.
     */
    public function __construct(
        public Message $message
    ) {
        //
    }

    /**
     * Dapatkan channel tempat event harus disiarkan.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('chat'),
        ];
    }

    /**
     * Tentukan nama siaran untuk event ini.
     *
     * @return string
     */
    public function broadcastAs(): string
    {
        return 'NewMessageSent';
    }

    /**
     * TAMBAHAN BARU (Solusi Realtime):
     * Tentukan apakah event ini harus segera disiarkan.
     * (Melewatkan antrian/queue)
     *
     * @return bool
     */
    public function shouldBroadcastNow(): bool
    {
        return true;
    }
}

