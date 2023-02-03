<?php

namespace App\Http\Controllers;

use App\Models\MediaType;

class MediaTypeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return MediaType::all(['id', 'description']);
    }
}
