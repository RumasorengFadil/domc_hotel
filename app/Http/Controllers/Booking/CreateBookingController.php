<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Controller;
use App\Http\Requests\Booking\CreateBookingRequest;
use App\Models\Booking;
use Inertia\Inertia;
use Redirect;

/**
 * Handle the creation of a new booking and render the Booking view with a success message.
 *
 * This function validates the incoming request data using the `CreateBookingRequest` class,
 * then calls the `createBooking` method on the `Booking` model to store the new booking.
 * After successfully creating the booking, it returns the 'Booking' Inertia view with
 * a success message.
 *
 * @param \App\Http\Requests\CreateBookingRequest $request The request object containing booking data.
 *
 * @return \Inertia\Response
 *
 * @throws \Illuminate\Validation\ValidationException
 *         If the request validation fails.
 * @throws \Illuminate\Database\QueryException
 *         If there is an error during the database operation.
 *
 * @version 1.0.0
 * @since 2024-08-25
 */
class CreateBookingController extends Controller
{
    public function createBooking(CreateBookingRequest $request)
    {
        $validatedData = $request->validated();

        Booking::createBooking($validatedData);

        return Inertia::render('Booking', ['message' => __("message.success.created", ['entity' => 'Booking'])]);
    }
}
