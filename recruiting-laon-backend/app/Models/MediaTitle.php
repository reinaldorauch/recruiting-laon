<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaTitle extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'media_title';

    protected $fillable = [
        'name',
        'original_name',
        'release_year',
        'sinopsis',
        'thumbnail_path',
    ];

    public function scores()
    {
        $this->hasMany(MediaScore::class);
    }

    public function casting()
    {
        $this->belongsToMany(MediaCasting::class);
    }

    public function content()
    {
        $this->hasMany(MediaContent::class);
    }

    public function director()
    {
        $this->belongsToMany(MediaDirector::class);
    }

    public function prizes()
    {
        $this->hasMany(MediaPrize::class);
    }

    public function type()
    {
        $this->belongsTo(MediaType::class);
    }
}
