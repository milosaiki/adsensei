<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $fillable = ['file', 'postId'];

    public function post()
    {
        return $this->belongsTo('App\Post');
    }
}
