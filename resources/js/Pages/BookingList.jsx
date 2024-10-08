import Button from "@/Components/Button";
import NavbarLayout from "@/Layouts/NavbarLayout";
import Background from "@/Layouts/Background";
import { Link, Head } from "@inertiajs/react";
import HotelCard from "@/Components/HotelCard";
import VideoCard from "@/Components/VideoCard";
import BookingCard from "@/Components/BookingCard";

export default function BookingList(bookings) {
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <>
            <Head title="BookingList" />
            <Background
                backgroundImage={"/img/produk-bg.png"}
                height={"max-content"}
            >
                <NavbarLayout />

                <h1 className="title">BOOKING LIST</h1>
                <p className="text">Our List</p>
                <div className="cards">
                    {bookings.bookings.map((booking, index) => (
                        <div className="booking-card">
                            <p className="booking-card-text">
                                Nama pemesan : {booking.name} <br />
                                Nomor Identitas : {booking.identity_number}{" "}
                                <br />
                                Jenis Kelamin : {booking.gender} <br />
                                Tipe Kamar : {booking.room_type} <br />
                                Durasi Penginapan : {
                                    `${booking.stay_duration} Hari`
                                } <br />
                                Discount Kamar : {`${booking.discount === 0.9? 10 : 0}`} % <br />
                                Total Bayar : {formatNumber(booking.total_payment)} <br />
                            </p>
                        </div>
                    ))}
                </div>
            </Background>
        </>
    );
}
