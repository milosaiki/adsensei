<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use Illuminate\Http\JsonResponse;
use App\MessageReply;

class AdminMessageController extends Controller
{
    public function getMessages() {
        return Message::orderBy('created_at', 'DESC')->get();
    }

    public function getNewMessages() {
        return new JsonResponse(Message::where('read', 0)->count());
    }

    public function delete(Request $request) {
        try {
            Message::findOrFail($request->messageId)->delete();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = -1;
        }
        return json_encode($response);
    }

    public function getMessage(Request $request) {
        $response = [];
        try {
            $message = Message::where('id', $request->messageId)->first();
            $message->read = 1;

            $message->save();
            $replies = MessageReply::where('messageId', $message->id)->get();
            $response['success'] = 1;
            $response['message'] = $message;
            $response['replies'] = $replies;
        } catch(\Exception $e) {
            $response['success'] = $e->getMessage();
        }

        return new JsonResponse($response);
    }
}
