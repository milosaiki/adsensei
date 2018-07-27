<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MessageReply extends Model
{
    protected $fillable = [ 'reply', 'messageId' ];

    public function message()
    {
        return $this->belongsTo('App\Message');
    }
}
