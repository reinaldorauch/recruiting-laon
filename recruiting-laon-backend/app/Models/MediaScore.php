<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaScore extends Model
{
    use HasFactory;

    protected $table = 'media_score';

    protected $fillable = [
        'label',
        'score'
    ];

    public function title()
    {
        $this->belongsTo(MediaTitle::class);
    }
}
