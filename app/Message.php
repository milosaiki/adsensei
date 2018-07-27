<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [ 'from', 'message', 'ip', 'email', 'answered', 'read' ];

    public function replies()
    {
        return $this->hasMany('App\MessageReply');
    }
}
