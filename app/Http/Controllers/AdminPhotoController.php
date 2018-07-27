<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Illuminate\Http\JsonResponse;
use App\Photo;
use Intervention\Image\ImageManager;

class AdminPhotoController extends Controller
{
    public function data() {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return new JsonResponse($posts);
    }

    public function post(Request $request) {
        $post = Post::select('title')->where('id', $request->postId)->first();
        return new JsonResponse($post);
    }

    public function upload(Request $request) {
        try {

            $postId = $request->postId;
            $photo = new Photo();
            $file = $request->file('img');
            $name = (new \DateTime())->format('YmdHis') . '_' . $file->getClientOriginalName();
            //$file->move('images/post/' . $postId, $name);
            $manager = new ImageManager(array('driver' => 'imagick'));
            $image = $manager->make('images/post/' + $postId + '/' + $name);
            dump($image);
            $image->resize(null, 250, function ($constraint) {
                $constraint->aspectRatio();
            });
            $image->save('images/post/' + $postId + '/thumbnail_' + $name);



            $photo->file = $name;
            $photo->postId = $postId;
            $photo->save();

            $response['success'] = 1;
            $response['fileName'] = $name;
            $response['photoId'] = $photo->id;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }

        return new JsonResponse($response);
    }

    public function getPhotosForPost(Request $request) {
        $photos = Photo::where('postId', $request->postId)->get();
        return new JsonResponse($photos);
    }

    private function makeThumbnail() {

    }
}
