import Button from "@/Components/Button";
import NavbarLayout from "@/Layouts/NavbarLayout";
import Background from "@/Layouts/Background";
import { Link, Head } from "@inertiajs/react";
import HotelCard from "@/Components/HotelCard";
import PriceTable from "@/Components/PriceTable";

export default function AboutUs({}) {
    return (
        <>
            <Head title="AboutUs" />

            <Background backgroundImage={"/img/aboutus-bg.png"}>
                <NavbarLayout />

                <h1 className="title">About Us</h1>

                <p className="text mb-16">THIS IS US</p>

                <p className="text mb-2">
                    We are located at, Jl. Komisaris Bambang Suprapto No.39-41,
                    Cigrobak, Purwokerto Lor, Kec. Purwokerto Tim., Kabupaten
                    Banyumas, <br /> Jawa Tengah 53114
                </p>
                <p className="text mb-4">dominichotels@gmail.com</p>
                <p className="text">+6285242582780</p>
            </Background>
        </>
    );
}
