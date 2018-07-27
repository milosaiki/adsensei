<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Photo;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    public function getPosts() {
        $posts = Post::orderBy('created_at', 'DESC')->get();

        return new JsonResponse($posts);
    }

    public function getPost(Request $request) {
        $post = Post::find($request->postId);
        return new JsonResponse($post);
    }

    public function getPhotos(Request $request) {
        $photos = Photo::where('postId', $request->postId)->get();
        return new JsonResponse($photos);
    }

    public function getLast2(Request $request) {
        $posts = Post::orderBy('created_at', 'DESC')->limit(2)->get();
        return new JsonResponse($posts);
    }
}
