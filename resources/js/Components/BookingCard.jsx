import Button from "./Button";

const BookingCard = ({ img, title, price, href }) => {
    return (
        <div className="booking-card">
            <p className="booking-card-text">
                Nama pemesan : Fadil Hijayat <br />
                Nomor Identitas : 101010100101101 <br />
                Jenis Kelamin : 101010100101101 <br />
                Tipe Kamar : Standar <br />
                Durasi Penginapan : {3} Hari <br />
                Discount Kamar : {10} % <br />
                Total Bayar : 1.590.000 <br />
            </p>
        </div>
    );
};

export default BookingCard;
