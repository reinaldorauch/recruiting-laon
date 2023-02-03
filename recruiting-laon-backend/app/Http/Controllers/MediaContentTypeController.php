<?php

namespace App\Http\Controllers;

use App\Models\MediaContentType;

class MediaContentTypeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return MediaContentType::all(['id', 'description']);
    }
}
