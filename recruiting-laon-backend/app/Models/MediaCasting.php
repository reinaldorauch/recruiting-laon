<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaCasting extends Model
{
    use HasFactory;

    protected $table = 'media_casting';

    public function titles()
    {
        $this->belongsToMany(MediaTitle::class);
    }
}
