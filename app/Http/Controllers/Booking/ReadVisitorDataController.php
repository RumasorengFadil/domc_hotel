<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReadVisitorDataController extends Controller
{
    public function readBooking()
    {
        $visitorData = Booking::selectRaw('DATE(input_date) as date, count(*) as visitors')
            ->groupBy('date')
            ->get();

        return Inertia::render('Home', ['visitorData' => $visitorData]);
    }
}
