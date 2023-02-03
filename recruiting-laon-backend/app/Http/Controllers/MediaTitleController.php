<?php

namespace App\Http\Controllers;

use App\Http\Requests\{DeleteMediaTitleRequest, StoreMediaTitleRequest, UpdateMediaTitleRequest};
use App\Models\MediaTitle;
use Illuminate\Http\Request;

class MediaTitleController extends Controller
{
    public function index(Request $req)
    {
        return MediaTitle::all();
    }

    public function store(StoreMediaTitleRequest $req)
    {
        dd($req->collect());
    }

    public function update(UpdateMediaTitleRequest $req)
    {
        dd($req->collect());
    }

    public function delete(DeleteMediaTitleRequest $req)
    {
        MediaTitle::destroy($req->get('id'));
    }
}
