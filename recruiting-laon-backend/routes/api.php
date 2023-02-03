<?php

use App\Http\Controllers\MediaContentTypeController;
use App\Http\Controllers\MediaTitleController;
use App\Http\Controllers\MediaTypeController;
use App\Http\Controllers\RegisterUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', RegisterUserController::class);
Route::get('/media-type', MediaTypeController::class);
Route::resource('/media-title', MediaTitleController::class);

Route::middleware('auth:sanctum')->group(function ($r) {

    $r->get('/user', function (Request $request) {
        return $request->user();
    });

    $r->resource('/media-titles', MediaTitleController::class);
    $r->get('/media-content-types', MediaContentTypeController::class);
});
