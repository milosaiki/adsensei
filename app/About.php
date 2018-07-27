<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    protected $fillable = [ 
        'aboutUs', 
        'mondayFrom', 
        'mondayTo',
        'tuesdayFrom',
        'tuesdayTo',
        'wednesdayFrom',
        'wednesdayTo',
        'thursdayFrom',
        'thursdayTo',
        'fridayFrom',
        'fridayTo',
        'saturdayFrom',
        'saturdayTo',
        'sundayFrom',
        'sundayTo'
    ];
}
