<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Photo;
use Illuminate\Http\JsonResponse;

class PhotoController extends Controller
{
    public function all(Request $request) {
        $photos = Photo::all();
        return new JsonResponse($photos);
    }
}
