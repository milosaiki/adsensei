<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $fillable = [ 'name', 'address', 'phone', 'mobile', 'lat', 'lng', 'facebook', 'youtube', 'instagram', 'googlePlus'];
}
