<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => ['auth', 'admin']], function () {
    Route::get('/admin', 'AdminDefaultController@index')->name('admin.index');
    
    Route::get('admin/post/list', 'AdminPostController@list');
    Route::post('admin/post/edit', 'AdminPostController@edit');
    Route::post('admin/post/save', 'AdminPostController@save');
    Route::post('admin/post/update', 'AdminPostController@update');
    Route::post('admin/post/delete', 'AdminPostController@delete');

    Route::post('admin/general-data/update-general-data', 'AdminDataController@updateGeneralData');
    Route::post('admin/general-data/update-gmap-data', 'AdminDataController@updateGmapData');
    Route::get('admin/general-data/get-data', 'AdminDataController@getData');
    Route::post('admin/general-data/set-social-data', 'AdminDataController@setSocialData');
    Route::post('admin/general-data/about/save', 'AdminAboutController@save');
    Route::get('admin/general-data/about/get', 'AdminAboutController@get');

    Route::get('admin/messages/get-messages', 'AdminMessageController@getMessages');
    Route::get('admin/get-unread-messages', 'AdminMessageController@getNewMessages');
    Route::post('admin/message/delete', 'AdminMessageController@delete');
    Route::post('admin/message/get-message', 'AdminMessageController@getMessage');
    Route::post('admin/message/get-repies', 'AdminMessageController@getReplies');

    Route::post('admin/message/reply', 'AdminMessageReplyController@send');

    Route::get('/admin/members/all', 'AdminMemberController@all');
    Route::post('/admin/member/save', 'AdminMemberController@save');
    Route::post('admin/member/edit', 'AdminMemberController@edit');
    Route::post('admin/member/update', 'AdminMemberController@update');
    Route::post('admin/member/delete', 'AdminMemberController@delete');

    Route::get('admin/media/data', 'AdminPhotoController@data');
    Route::post('admin/media/upload/post-data', 'AdminPhotoController@post');
    Route::post('admin/media/upload/image', 'AdminPhotoController@upload');
    Route::post('admin/media/get-photos-for-post', 'AdminPhotoController@getPhotosForPost');

    Route::post('admin/event/save', 'AdminEventController@save');
    Route::post('admin/event/delete', 'AdminEventController@delete');
    Route::get('admin/event/all', 'AdminEventController@all');
    Route::get('admin/event/get', 'AdminEventController@get');

    Route::get('admin/comment/get-all', 'AdminCommentController@getAll');
    Route::post('admin/comment/change-status', 'AdminCommentController@changeStatus');
    Route::post('admin/comment/delete', 'AdminCommentController@delete');
});

Route::get('/', 'DefaultController@index')->name('public.index');
Route::get('/get-data', 'DefaultController@getData');

Route::get('/about/get', 'AboutController@get');
Route::get('/member/get-members', 'MemberController@get');

Route::post('/contact/send-message', 'MessageController@send');
Route::get('/contact/gmap-data', 'DefaultController@getGmapData');

Route::get('/posts/get-posts', 'PostController@getPosts');
Route::get('/post/get-post', 'PostController@getPost');
Route::get('/post/get-photos', 'PostController@getPhotos');
Route::get('/posts/get-last-2-posts', 'PostController@getLast2');

Route::get('/photos/all', 'PhotoController@all');

Route::post('/comment/send', 'CommentController@send');
Route::post('/comment/getAll', 'CommentController@getAll');

Route::get('photos/get-all', 'PhotoController@all');
