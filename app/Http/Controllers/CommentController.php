<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Comment;

class CommentController extends Controller
{
    const RESPONSE_SUCCESS = [ 'success' => 1, 'error' => 0 ];
    const RESPONSE_ERROR = [ 'success' => -1, 'error' => 1 ];

    public function getAll(Request $request) {
        $comments = Comment::where([['postId', $request->postId], ['active', 1]])
                            ->orderBy('created_at', 'DESC')->get();
        return new JsonResponse($comments);
    }

    public function send(Request $request) {
        $data = $request->comment;
        $args = [];
        try {
            $Comment = new Comment();
            $Comment->name = $data['name'];
            $Comment->email = $data['email'];
            $Comment->body = $data['body'];
            $Comment->postId = $data['postId'];
            $Comment->save();

            $args = self::RESPONSE_SUCCESS;
        } catch (\Exception $e) {
            $args = $e->getMessage();
        }
        return new JsonResponse($args);
    }
}
