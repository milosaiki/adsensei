<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Comment;

class AdminCommentController extends Controller
{
    public function getAll(Request $request) {
        $comments = Comment::orderBy('created_at', 'DESC')->get();
        return new JsonResponse($comments);
    }

    public function changeStatus(Request $request) {
        $args = [];
        try {
            $comment = Comment::findOrFail($request->commentId);
            $comment->active = !$comment->active;
            $comment->save();
            $args['status'] = $comment->active;
            $args['success'] = 1;
        } catch (\Exception $e) {
            $args['success'] = $e->getMessage();
        }

        return new JsonResponse($args);
    }

    public function delete(Request $request) {
        try {
            Comment::findOrFail($request->commentId)->delete();
            $args['success'] = 1;
        } catch (\Exception $e) {
            $args['success'] = $e->getMessage();
        }
        return new JsonResponse($args);
    }
}
