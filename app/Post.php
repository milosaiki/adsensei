<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'body', 'shortDesc', 'coverPhoto'];

    public function photos()
    {
        return $this->hasMany('App\Photo');
    }
}
