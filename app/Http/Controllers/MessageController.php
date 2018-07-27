<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Message;

class MessageController extends Controller
{
    public function send(Request $request) {
        $response = [];
        $data = $request->message;
        try {
            $message = new Message();
            $message->from = $data['name'];
            $message->message = $data['message'];
            $message->email = $data['email'];
            $message->ip = $request->ip();

            $message->save();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }

        return new JsonResponse($response);
    }
}
