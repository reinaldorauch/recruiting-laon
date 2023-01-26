<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaContentType extends Model
{
    use HasFactory;

    protected $table = 'media_content_type';

    protected $fillable = [
        'description',
    ];

    public function content()
    {
        $this->hasMany(MediaContent::class);
    }
}
