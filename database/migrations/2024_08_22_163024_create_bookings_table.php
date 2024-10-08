<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id('booking_id');
            $table->string('name');
            $table->enum('gender', ['laki-laki', 'perempuan']);
            $table->bigInteger('identity_number');
            $table->enum('room_type',['standar', 'deluxe', 'family']);
            $table->integer('room_price');
            $table->integer('stay_duration');
            $table->float('discount')->nullable();
            $table->boolean('include_breakfast');
            $table->integer('total_payment');
            $table->date('booking_date');
            $table->date('input_date');
            $table->date('last_update');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
