<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Data;
use Illuminate\Http\JsonResponse;

class DefaultController extends Controller
{
    const PRIMARY_DATA_ID = 1;

    public function index() {
        return view('public.index');
    }

    public function getData(Request $request) {
        $data = Data::findOrFail(self::PRIMARY_DATA_ID);
        return new JsonResponse($data);
    }

    public function getGmapData(Request $request) {
        $gmap = Data::select('name', 'lat', 'lng', 'address')->where('id', self::PRIMARY_DATA_ID)->first();
        return new JsonResponse($gmap);
    }
}
