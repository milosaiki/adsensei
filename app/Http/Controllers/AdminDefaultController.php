<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminDefaultController extends Controller
{
    public function index() {

        return view('admin.index');
    }
}
