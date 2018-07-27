<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\About;

class AdminAboutController extends Controller
{
    const ABOUT_ID = 1;

    public function save(Request $request) {
        $response = [];
        try {
            $about = About::find(self::ABOUT_ID);
            $data = $request->data;
            if (!$about) {
                $about = new About();
            }
            if (isset($data['aboutUs'])) {
                $about->aboutUs = $data['aboutUs'];
            }
            if (isset($data['mondayFrom'])) {
                $about->mondayFrom = $data['mondayFrom'];
            }
            if (isset($data['mondayTo'])) {
                $about->mondayTo = $data['mondayTo'];
            }
            if (isset($data['tuesdayFrom'])) {
                $about->tuesdayFrom = $data['tuesdayFrom'];
            }
            if (isset($data['tuesdayTo'])) {
                $about->tuesdayTo = $data['tuesdayTo'];
            }
            if (isset($data['wednesdayFrom'])) {
                $about->wednesdayFrom = $data['wednesdayFrom'];
            }
            if (isset($data['wednesdayTo'])) {
                $about->wednesdayTo = $data['wednesdayTo'];
            }
            if (isset($data['thursdayFrom'])) {
                $about->thursdayFrom = $data['thursdayFrom'];
            }
            if (isset($data['thursdayTo'])) {
                $about->thursdayTo = $data['thursdayTo'];
            }
            if (isset($data['fridayFrom'])) {
                $about->fridayFrom = $data['fridayFrom'];
            }
            if (isset($data['fridayTo'])) {
                $about->fridayTo = $data['fridayTo'];
            }
            if (isset($data['saturdayFrom'])) {
                $about->saturdayFrom = $data['saturdayFrom'];
            }
            if (isset($data['saturdayTo'])) {
                $about->saturdayTo = $data['saturdayTo'];
            }
            if (isset($data['sundayFrom'])) {
                $about->sundayFrom = $data['sundayFrom'];
            }
            if (isset($data['sundayTo'])) {
                $about->sundayTo = $data['sundayTo'];
            }            

            $about->save();
            $response['success'] = 1;

        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }
        return new JsonResponse($response);
    }

    public function get() {
        $about = About::find(self::ABOUT_ID);
        return new JsonResponse($about);
    }
}
