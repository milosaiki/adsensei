<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\MessageReply;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendReply;
use App\Message;

class AdminMessageReplyController extends Controller
{
    public function send(Request $request) {
        $response = [];
        try {
            $message = Message::findOrFail($request->messageId);
            $reply = new MessageReply();
            $reply->messageId = $request->messageId;
            $reply->reply = $request->reply;

            $reply->save();
            //$this->sendReply($message->email);
            $response['success'] = 1;
        } catch(\Exception $e) {
            $response['success'] = $e->getMessage();
        }
        return new JsonResponse($response);
    }

    private function sendReply($sendTo) {
        $objDemo = new \stdClass();
        $objDemo->demo_one = 'Demo One Value';
        $objDemo->demo_two = 'Demo Two Value';
        $objDemo->sender = 'SenderUserName';
        $objDemo->receiver = 'ReceiverUserName';

        Mail::to($sendTo)->send(new SendReply($objDemo));
    }
}
