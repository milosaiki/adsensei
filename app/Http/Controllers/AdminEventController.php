<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use Symfony\Component\HttpFoundation\JsonResponse;

class AdminEventController extends Controller
{
    public function save(Request $request) {
        try {
            $event = new Event();
            $event->title = $request->title;
            $event->eventDate = $request->date;
            $event->timeFrom = $request->from;
            $event->timeTo = $request->to;

            $event->save();
            $response['success'] = 1;
            $response['event'] = $event;
        } catch (\Exception $e) {   
            $response['success'] = $e->getMessage();
        }

        return new JsonResponse($response);
    }

    public function all() {
        $events = Event::orderBy('created_at', 'DESC')->get();

        return new JsonResponse($events);
    }

    public function delete(Request $request) {
        try {
            Event::findOrFail($request->eventId)->delete();
            $response['success'] = 1;
        } catch (\Exception $e) {
            $response['success'] = $e->getMessage();
        }

        return new JsonResponse($response);
    }

    public function get(Request $request)
    {
        $event = Event::findOrFail($request->id);
        return new JsonResponse($event);
    }
}
