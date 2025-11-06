<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // DIPERBARUI agar sesuai dengan database (name & message)
    protected $fillable = [
        'name',
        'message',
    ];

    /**
     * The attributes that should be cast.
     *
     * (Opsional, tapi praktik yang baik)
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}

