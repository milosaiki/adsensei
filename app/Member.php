<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [ 'firstname', 'lastname', 'kyu', 'is_trainer', 'is_assistant', 'resume', 'facebook', 'twitter', 'instagram', 'googlePlus'];
}
