<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;
use Illuminate\Http\JsonResponse;

class MemberController extends Controller
{
    public function get() {
        $members = Member::orderBy('is_trainer', 'DESC')
                        ->orderBy('is_assistant', 'DESC')
                        ->orderBy('kyu', 'ASC')
                        ->get();
        return new JsonResponse($members);
    }
}
