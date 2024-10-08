import Button from "@/Components/Button";
import NavbarLayout from "@/Layouts/NavbarLayout";
import Background from "@/Layouts/Background";
import { Link, Head, useForm } from "@inertiajs/react";
import HotelCard from "@/Components/HotelCard";
import PriceTable from "@/Components/PriceTable";
import InputError from "@/Components/InputError";
import { useCallback, useEffect, useState } from "react";
import Toast from "@/Components/Toast";
import { Transition } from "@headlessui/react";

export default function Booking() {
    const price = {
        "standar" : 100_000,
        "deluxe" : 500_000,
        "family" : 1_000_000
    }
    const { data, setData, post, errors, recentlySuccessful, reset } = useForm({
        name: "",
        gender: "Laki-laki",
        identityNumber: "",
        roomType: "standar",
        roomPrice: 100000,
        discount: "",
        bookingDate: "",
        stayDuration: "",
        includeBreakfast: false,
        totalPayment: "",
        isPaymentUpdated: false,
    });

    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("success");

    /**
     * Menghitung total pembayaran berdasarkan durasi menginap, tambahan sarapan,
     * dan pembaruan status pembayaran.
     *
     * - **Diskon**: Diskon diterapkan jika durasi menginap lebih dari atau sama dengan 3 hari.
     * - **Biaya Sarapan**: Biaya sarapan ditambahkan jika pilihan sarapan diaktifkan.
     * - **Pembayaran Total**: Dihitung berdasarkan harga kamar, durasi menginap, diskon,
     * dan biaya sarapan.
     * - **Pembaruan Status**: Mengatur status `isPaymentUpdated` menjadi `true`.
     *
     * @function
     * @name countTotalPayment
     * @returns {void}
     */
    const countTotalPayment = () => {
        const discount = data.stayDuration >= 3 ? 0.9 : 1;
        const breakfastCost = data.includeBreakfast ? 80_000 : 0;
        setData((prevData) => ({
            ...prevData,
            discount: discount,
            totalPayment:
                prevData.roomPrice * data.stayDuration * discount +
                breakfastCost * data.stayDuration,
            isPaymentUpdated: true,
        }));
    };

    /**
     * Menangani perubahan pada input form dan memperbarui status serta nilai data
     * sesuai dengan nama dan tipe input yang diubah.
     *
     * - **isPaymentUpdated**: Diperbarui menjadi `false` jika input yang diubah adalah
     * "stayDuration", "roomType", atau "includeBreakfast". Jika tidak, diperbarui menjadi `true`.
     * - **roomPrice**: Diperbarui berdasarkan nilai `roomType` jika input yang diubah adalah "roomType".
     * - **Input Tipe**: Jika tipe input adalah checkbox, nilai diambil dari `e.target.checked`.
     * Jika tidak, nilai diambil dari `e.target.value`.
     *
     * @function
     * @name handleChange
     * @param {Object} e - Event objek perubahan dari input form.
     * @param {string} e.target.name - Nama input yang diubah.
     * @param {string} e.target.type - Tipe input yang diubah (misalnya, checkbox atau text).
     * @param {boolean|string} e.target.checked - Nilai checkbox jika tipe input adalah checkbox.
     * @param {string} e.target.value - Nilai input jika tipe input bukan checkbox.
     * @returns {void}
     */
    const handleChange = (e) => {
        const isPaymentUpdated =
            e.target.name === "stayDuration" ||
            e.target.name === "roomType" ||
            e.target.name === "includeBreakfast";
        setData({
            ...data,
            [`${e.target.name}`]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
            isPaymentUpdated: isPaymentUpdated ? false : true,
            roomPrice:
                e.target.name === "roomType"
                    ? price[e.target.value]
                    : data.roomPrice,
        });
    };

    /**
     * Menangani pengiriman form dan melakukan request POST ke endpoint "/booking".
     *
     * - Mencegah aksi default pengiriman form dengan `e.preventDefault()`.
     * - Mengirim data form ke endpoint "/booking" dengan menggunakan `post` method.
     * - Menampilkan pesan toast jika pengiriman berhasil.
     *
     * @function
     * @name submit
     * @param {Object} e - Objek event dari pengiriman form.
     * @param {Function} e.preventDefault - Metode untuk mencegah aksi default dari pengiriman form.
     * @returns {void}
     */
    const submit = (e) => {
        e.preventDefault();

        post("/booking", {
            onSuccess: (message) => {
                setToastMessage(message.props.message);
                setToastType("success");
                reset();
            },
        });
    };
    return (
        <>
            <Head title="Booking" />
            <Background backgroundImage={"/img/booking-bg.png"}>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                ></Transition>
                <NavbarLayout />
                <Toast
                    message={toastMessage}
                    type={toastType}
                    resetToastMessage={() => setToastMessage(null)}
                />

                <div className="booking">
                    <div className="booking-header">BOOKING</div>
                    <div className="booking-body">
                        <form className="booking-form" onSubmit={submit}>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <input
                                        className="booking-form-input"
                                        name="name"
                                        type="text"
                                        value={data.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <InputError
                                    message={errors.name}
                                    className="input-error mt-2"
                                />
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="gender"
                                    >
                                        Jenis Kelamin
                                    </label>
                                    <span className="booking-dots">:</span>

                                    <div>
                                        <div>
                                            <input
                                                className="booking-input-radio w-4"
                                                name="gender"
                                                type="radio"
                                                checked
                                                value={data.gender}
                                                onChange={handleChange}
                                            />
                                            <span
                                                className="mr-4"
                                                style={{ fontSize: "16px" }}
                                            >
                                                Laki-laki
                                            </span>
                                        </div>
                                        <div>
                                            <input
                                                className="booking-input-radio w-4"
                                                name="gender"
                                                type="radio"
                                                value={data.gender}
                                                onChange={handleChange}
                                            />
                                            <span style={{ fontSize: "16px" }}>
                                                Perempuan
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="identityNumber"
                                    >
                                        Nomor Identitas
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <input
                                        className="booking-form-input"
                                        name="identityNumber"
                                        type="number"
                                        value={data.identityNumber}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <InputError
                                    message={errors.identityNumber}
                                    className="input-error mt-2"
                                />
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="roomType"
                                    >
                                        Tipe Kamar
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <select
                                        className="booking-form-input rounded-sm"
                                        name="roomType"
                                        style={{ width: "100%" }}
                                        value={data.roomType}
                                        onChange={handleChange}
                                    >
                                        <option value="standar">Standar</option>
                                        <option value="deluxe">Deluxe</option>
                                        <option value="family">Family</option>
                                    </select>
                                </div>
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="roomPrice"
                                    >
                                        Harga
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <input
                                        className="booking-form-input"
                                        name="roomPrice"
                                        type="number"
                                        value={data.roomPrice}
                                        onChange={handleChange}
                                        disabled
                                        required
                                    />
                                </div>
                                <InputError
                                    message={errors.roomPrice}
                                    className="input-error mt-2"
                                />
                            </div>
                            <div className="hidden">
                                <label
                                    className="booking-form-label"
                                    htmlFor="discount"
                                ></label>
                                <input
                                    name="discount"
                                    type="number"
                                    onChange={() => {}}
                                />
                            </div>
                            <div className="hidden">
                                <label
                                    className="booking-form-label"
                                    htmlFor="isPaymentUpdated"
                                ></label>
                                <input
                                    name="isPaymentUpdated"
                                    type="checkbox"
                                    onChange={() => {}}
                                />
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="bookingDate"
                                    >
                                        Tanggal Pesan
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <input
                                        className="booking-form-input"
                                        name="bookingDate"
                                        type="date"
                                        value={data.bookingDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <InputError
                                    message={errors.bookingDate}
                                    className="input-error mt-2"
                                />
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="stayDuration"
                                    >
                                        Durasi Menginap
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <input
                                        className="booking-form-input"
                                        name="stayDuration"
                                        type="number"
                                        value={data.stayDuration}
                                        onChange={handleChange}
                                        placeholder="Dalam hari"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="includeBreakfast"
                                    >
                                        Termasuk Breakfast
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <input
                                        className="w-3 h-3"
                                        name="includeBreakfast"
                                        type="checkbox"
                                        value={data.includeBreakfast}
                                        onChange={handleChange}
                                        placeholder="Dalam hari"
                                    />
                                    <span className="ml-2 text-sm">Ya</span>
                                </div>
                                <InputError
                                    message={errors.includeBreakfast}
                                    className="input-error mt-2"
                                />
                            </div>
                            <div className="booking-form-el">
                                <div className="w-full flex items-center">
                                    <label
                                        className="booking-form-label"
                                        htmlFor="totalPayment"
                                    >
                                        Total bayar
                                    </label>
                                    <span className="booking-dots">:</span>
                                    <input
                                        className="booking-form-input"
                                        name="totalPayment"
                                        type="number"
                                        value={data.totalPayment}
                                        onChange={handleChange}
                                        disabled
                                        required
                                    />
                                </div>
                                <InputError
                                    message={errors.totalPayment}
                                    className="input-error mt-2"
                                />
                            </div>

                            <button
                                className="booking-btn"
                                name="totalPayment"
                                type="button"
                                onClick={countTotalPayment}
                            >
                                Hitung Total Bayar
                            </button>

                            <input
                                className="booking-btn"
                                style={{ backgroundColor: "#2196F3" }}
                                type="submit"
                                value="Booking"
                            />
                            <button
                                className="booking-btn"
                                type="button"
                                onClick={() => reset()}
                            >
                                Cancel
                            </button>
                            <InputError
                                message={errors.isPaymentUpdated}
                                className="input-error mt-2"
                            />
                        </form>
                    </div>
                </div>
            </Background>
        </>
    );
}
