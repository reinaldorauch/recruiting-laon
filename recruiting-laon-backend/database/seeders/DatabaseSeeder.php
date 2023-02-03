<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\MediaContentType;
use App\Models\MediaType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Default media types
        MediaType::create(['id' => 1, 'description' => 'Filme']);
        MediaType::create(['id' => 2, 'description' => 'Serie']);

        MediaContentType::create(['id' => 1, 'description' => 'Trailer']);
        MediaContentType::create(['id' => 2, 'description' => 'Feature Film']);
        MediaContentType::create(['id' => 3, 'description' => 'Episodio']);
        MediaContentType::create(['id' => 4, 'description' => 'Extra']);
        MediaContentType::create(['id' => 5, 'description' => 'Making Off']);
    }
}
