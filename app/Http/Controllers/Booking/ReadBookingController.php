<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReadBookingController extends Controller
{

    /**
     * Handle the retrieval of booking data and return the home view with visitor data.
     *
     * This function fetches the booking data grouped by the input date, counting the number
     * of bookings per date. The data is then passed to the 'Home' Inertia view as `visitorData`.
     *
     * @return \Inertia\Response
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     *         If no booking data is found.
     * @throws \Exception
     *         If there is an error during the query execution or rendering process.
     *
     * @version 1.0.0
     * @since 2024-08-25
     */
    public function readVisitorData()
    {
        $visitorData = Booking::selectRaw('DATE(input_date) as date, count(*) as visitors')
            ->groupBy('date')
            ->get();

        return Inertia::render('Home', ['visitorData' => $visitorData]);
    }
    public function readBooking()
    {
        $bookings = Booking::all();

        return Inertia::render('BookingList', ['bookings' => $bookings]);
    }
}
