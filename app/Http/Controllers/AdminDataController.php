<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Data;
use Illuminate\Http\JsonResponse;

class AdminDataController extends Controller
{
    const PRIMARY_DATA_ID = 1;

    public function updateGeneralData(Request $request) {
        $response = [];
        try {
            $data = Data::find(self::PRIMARY_DATA_ID);

            if (!$data) {
                $data = new Data();
            }
            $data->name = $request->name;
            $data->address = $request->address;
            $data->phone = $request->phone;
            $data->mobile = $request->mobile;

            $data->save();
            $response['success'] = 1;
        } catch(\Exception $e) {
            $response['success'] = $e->getMessage();
        }
        return new JsonResponse($response);
    }

    public function updateGmapData(Request $request) {
        $response = [];
        try {
            $data = Data::find(self::PRIMARY_DATA_ID);

            if (!$data) {
                $data = new Data();
            }
            $data->lat = $request->lat;
            $data->lng = $request->lng;

            $data->save();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = -1;
        }
        return new JsonResponse($response);
    }

    public function getData(Request $request) {
        $data = Data::find(self::PRIMARY_DATA_ID);
        return !empty($data) ? $data : '';
    }

    public function setSocialData(Request $request) {
        $response = [];
        $social = $request->social;
        try {
            $data = Data::find(self::PRIMARY_DATA_ID);

            if (!$data) {
                $data = new Data();
            }
            if (isset($social['facebook'])) {
                $data->facebook = $social['facebook'];
            }
            if(isset($social['instagram'])) {
                $data->instagram = $social['instagram'];
            }
            if(isset($social['youtube'])) {
                $data->youtube = $social['youtube'];
            }
            if(isset($social['googlePlus'])) {
                $data->googlePlus = $social['googlePlus'];
            }
            if(isset($social['twitter'])) {
                $data->twitter = $social['twitter'];
            }

            $data->save();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }
        return new JsonResponse($response);
    }
}
