<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "booking_id" => fake()->unique()->randomNumber(2),
            'name' => fake()->name(),
            'gender' => fake()->randomElement(["laki-laki", "perempuan"]),
            'identity_number' => fake()->creditCardNumber(),
            'room_type' => fake()->randomElement(["Standar", "Deluxe", "Family"]),
            'room_price' => fake()->randomElement([100000, 500000, 1000000]),
            'booking_date' => fake()->date(),
            'stay_duration' => fake()->randomNumber(1),
            'discount' => fake()->randomElement([0,10]),
            'include_breakfast' => fake()->randomElement([true, false]),
            'total_payment' => fake()->numberBetween(100000, 1000000),
            'input_date' => fake()->dateTimeBetween('20 august'),
            'last_update' => fake()->date(),
        ];
    }
}
