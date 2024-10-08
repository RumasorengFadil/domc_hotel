import Button from "./Button";

const HotelCard = ({ img, title, price, href }) => {
    return (
        <div className="hotel-card">
                <img className="hotel-card-img" src={img}></img>

                <div className="hotel-card-price">
                    {price}
                </div>

            <div className="hotel-card-body">
                <div className="hotel-card-ratingcn">⭐⭐⭐⭐⭐</div>
                <h1 className="hotel-card-title">{title}</h1>
                <p className="hotel-card-text">
                    Hotel nyaman dengan fasilitas dasar, kamar bersih, layanan
                    ramah, dan lokasi strategis dekat pusat kota.
                </p>

                <div className="hotel-card-actions">
                    <Button
                        text={"Booking Now"}
                        backgroundColor={"unset"}
                        border={"1px solid #98A2B3"}
                        margin={0}
                        color={"#98A2B3"}
                        href={href}
                    />
                    <div className="hotel-card-icncn">
                        <img
                            className="hotel-card-icn"
                            src="icn/wifi.svg"
                        ></img>
                    </div>
                    <div className="hotel-card-icncn">
                        <img className="hotel-card-icn" src="icn/tv.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
