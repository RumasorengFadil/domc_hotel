<?php

use App\Http\Controllers\Booking\CreateBookingController;
use App\Http\Controllers\Booking\ReadBookingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ReadBookingController::class, "readVisitorData"]);
Route::get('/product', function () {
    return Inertia::render('Product');
});
Route::get('/list-price', function () {
    return Inertia::render('ListPrice');
});
Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});
Route::get('/booking', function () {
    return Inertia::render('Booking');
})->name("booking");

Route::post('/booking', [CreateBookingController::class, 'createBooking']);
Route::get('/booking-list', [ReadBookingController::class, "readBooking"]);



