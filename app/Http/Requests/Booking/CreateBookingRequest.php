<?php

namespace App\Http\Requests\Booking;

use Illuminate\Foundation\Http\FormRequest;

class CreateBookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:40',
            'gender' => 'required',
            'identityNumber' => 'required|numeric|digits:16',
            'roomType' => 'required',
            'roomPrice' => 'required',
            'discount' => 'numeric',
            'isPaymentUpdated' => 'accepted',
            'totalPayment' => 'required|numeric',
            'bookingDate' => 'required',
            'stayDuration' => 'required|numeric',
            'includeBreakfast' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Nama penulis item harus diisi.!',
            'identityNumber.required' => "Nomor identitas penulis item harus diisi.!",
            'identityNumber.digits' => "Nomor identitas harus 16 angka.!",
            'identityNumber.numeric' => "Nomor identitas harus berupa angka.!",
            'roomType.required' => "Tipe ruangan harus diisi.!",
            'roomPrice.required' => "Harga ruangan harus diisi.!",
            'bookingDate.required' => "Booking date harus diisi.!",
            'stayDuration.required' => "Durasi menginap harus diisi.!",
            'stayDuration.numeric' => "Durasi menginap harus berupa angka.!",
            'totalPayment.required' => "Total pembayaran harus diisi.!",
            'totalPayment.numeric' => "Total pembayaran harus berupa angka.!",
            'isPaymentUpdated.accepted' => "Silakan hitung total bayar terlebih dahulu.!",
        ];
    }
}
