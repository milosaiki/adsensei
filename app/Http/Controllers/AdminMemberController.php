<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;
use Illuminate\Http\JsonResponse;

class AdminMemberController extends Controller
{

    public function edit(Request $request) {
        $memberId = $request->memberId;
        $member = Member::findOrFail($memberId);

        return new JsonResponse($member);
    }

    public function save(Request $request) {
        $data = json_decode($request->member);
        $file = $request->file('img');
        //return new JsonResponse(gettype($data));
        try {
            $member = new Member();
            $member->firstname = $data->firstname;
            $member->lastname = $data->lastname;
            $member->kyu = $data->kyu;
            if ($data->role == 1) {
                $member->is_trainer = true;
                $member->is_assistant = false;
            } else if ($data->role == 2) {
                $member->is_trainer = false;
                $member->is_assistant = true;
            } else {
                $member->is_trainer = false;
                $member->is_assistant = false;
            }
            if (!empty($data->resume)) {
                $member->resume = $data->resume;
            }
            if (!empty($data->facebook)) {
                $member->facebook = $data->facebook;
            }
            if (!empty($data->twitter)) {
                $member->twitter = $data->twitter;
            }
            if (!empty($data->instagram)) {
                $member->instagram = $data->instagram;
            }
            if (!empty($data->googlePlus)) {
                $member->googlePlus = $data->googlePlus;
            }

            if (!empty($file)) {
                $name = (new \DateTime())->format('YmdHis') . '_' . $file->getClientOriginalName();
                $member->photo = $name;
            }
            $member->save();
            if (!empty($file)) {
                $file->move('images/member/' . $member->id, $name);
            }
            $response['success'] = 1;
        } catch(\Exception $e) {
            $response['success'] = $e->getMessage();
        }
        return new JsonResponse($response);
    }

    public function delete(Request $request) {
        $response = [];
        $id = $request->memberId;
        try {
            Member::findOrFail($id)->delete();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }
        return new JsonResponse($response);
    }

    public function all() {
        return Member::orderBy('is_trainer', 'desc')->orderBy('is_assistant', 'desc')->orderBy('kyu', 'desc')->get();
    }

    public function update(Request $request) {
        $data = json_decode($request->member);
        $file = $request->file('img');

        try {
            $member = Member::findOrFail($data->id);
            $member->firstname = $data->firstname;
            $member->lastname = $data->lastname;
            $member->kyu = $data->kyu;
            if ($data->role == 1) {
                $member->is_trainer = true;
                $member->is_assistant = false;
            } else if ($data->role == 2) {
                $member->is_trainer = false;
                $member->is_assistant = true;
            } else {
                $member->is_trainer = false;
                $member->is_assistant = false;
            }
            if (!empty($data->resume)) {
                $member->resume = $data->resume;
            }
            if (!empty($data->facebook)) {
                $member->facebook = $data->facebook;
            }
            if (!empty($data->twitter)) {
                $member->twitter = $data->twitter;
            }
            if (!empty($data->instagram)) {
                $member->instagram = $data->instagram;
            }
            if (!empty($data->googlePlus)) {
                $member->googlePlus = $data->googlePlus;
            }
            if(!empty($file)) {
                $name = (new \DateTime())->format('YmdHis') . '_' . $file->getClientOriginalName();
                $file->move('images/member/' . $member->id, $name);
                $member->photo = $name;
            }
            $member->save();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }
        return new JsonResponse($response);
    }
}
