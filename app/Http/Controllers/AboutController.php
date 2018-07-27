<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\About;
use Illuminate\Http\JsonResponse;

class AboutController extends Controller
{
    const ABOUT_ID = 1;

    public function get () {
        $about = About::find(self::ABOUT_ID);
        return new JsonResponse($about);
    }
}
