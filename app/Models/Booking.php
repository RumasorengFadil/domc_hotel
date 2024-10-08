<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $primaryKey = 'booking_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'gender',
        'identity_number',
        'room_type',
        'room_price',
        'stay_duration',
        'discount',
        'include_breakfast',
        'total_payment',
        'booking_date',
        'input_date',
        'last_update',
    ];

    /**
     * Create a new booking record in the database.
     *
     * This static method creates a new booking entry using the provided data array. 
     * It maps the data array to the relevant columns in the `Booking` model and
     * sets the `booking_date`, `input_date`, and `last_update` to the current date.
     *
     * @param array $data An associative array containing the booking details. The array should include:
     *                    - 'name' (string): The name of the person making the booking.
     *                    - 'gender' (string): The gender of the person making the booking.
     *                    - 'identityNumber' (string): The identity number of the person making the booking.
     *                    - 'roomType' (string): The type of room being booked.
     *                    - 'roomPrice' (float): The price of the room being booked.
     *                    - 'stayDuration' (int): The duration of the stay in days.
     *                    - 'discount' (float): The discount applied to the booking.
     *                    - 'includeBreakfast' (bool): Whether breakfast is included in the booking.
     *                    - 'totalPayment' (float): The total payment for the booking.
     *
     * @return \App\Models\Booking The created booking model instance.
     *
     * @throws \Illuminate\Database\Eloquent\Exception
     *         If there is an issue creating the booking in the database.
     *
     * @version 1.0.0
     * @since 2024-08-25
     */
    public static function createBooking($data)
    {
        return Booking::create([
            'name' => $data['name'],
            'gender' => $data['gender'],
            'identity_number' => $data['identityNumber'],
            'room_type' => $data['roomType'],
            'room_price' => $data['roomPrice'],
            'booking_date' => now()->toDateString(),
            'stay_duration' => $data['stayDuration'],
            'discount' => $data['discount'],
            'include_breakfast' => $data['includeBreakfast'],
            'total_payment' => $data['totalPayment'],
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ]);
    }


}
