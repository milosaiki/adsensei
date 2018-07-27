<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\JsonResponse;

class AdminPostController extends Controller
{
    public function list() {
        $posts = Post::orderBy('created_at', 'desc')->get();

        return json_encode($posts);
    }

    public function save(Request $request) {
        $file = $request->file('img');
        try {
            $post = new Post();
            $post->title = $request->title;
            $post->body = $request->body;
            $post->shortDesc = $this->makeShortDesc($request->body);

            if (!empty($file)) {
                $name = (new \DateTime())->format('YmdHis') . '_cover_' . $file->getClientOriginalName();
                $post->coverPhoto = $name;
            }

            $post->save();
            if (!empty($file)) {
                $file->move('images/post/' . $post->id, $name);
            }
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }

        return json_encode($response);
    }

    public function edit(Request $request) {
        $postId = $request->postId;
        $post = Post::findOrFail($postId);

        return json_encode($post);
    }

    public function update(Request $request) {
        $file = $request->file('img');
        try {
            $postId = $request->postId;
            $post = Post::findOrFail($postId);
            $post->title = $request->title;
            $post->body = $request->body;
            $post->shortDesc = $this->makeShortDesc($request->body);

            if (!empty($file)) {
                $name = (new \DateTime())->format('YmdHis') . '_cover_' . $file->getClientOriginalName();
                $post->coverPhoto = $name;

                $file->move('images/post/' . $post->id, $name);
            }

            $post->save();
            
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }

        return json_encode($response);
    }

    public function delete(Request $request) {
        try {
            Post::findOrFail($request->postId)->delete();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = -1;
        }
        return json_encode($response);
    }

    private function makeShortDesc($text) {
        $stripped = strip_tags($text);
        return substr($stripped, 0, 150);
    }
}
