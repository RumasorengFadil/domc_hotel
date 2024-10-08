import Button from "@/Components/Button";
import NavbarLayout from "@/Layouts/NavbarLayout";
import Background from "@/Layouts/Background";
import { Link, Head } from "@inertiajs/react";
import HotelCard from "@/Components/HotelCard";
import VideoCard from "@/Components/VideoCard";

export default function Product() {
    return (
        <>
            <Head title="Product" />

            <Background backgroundImage={"/img/produk-bg.png"} height={"max-content"}>
                <NavbarLayout />

                <h1 className="title">OUR PRODUCTS</h1>
                <p className="text">Our best products</p>

                <div className="cards">
                    <HotelCard title="Standar" price= "100k" img={"/img/room-standar.png"} href="/booking"/>
                    <HotelCard title="Deluxe" price="500k" img={"/img/room-deluxe.png"}href="/booking" />
                    <HotelCard title="Family" price="1000k" img={"/img/room-family.png"} href="/booking" />
                </div>
            </Background>
            <div className="video-card-cn">
                <VideoCard title= "Standar" url= "https://www.youtube.com/embed/qemqQHaeCYo?si=gMDdqIfkIZ5Ah_q-" />
                <VideoCard title= "Deluxe" url= "https://www.youtube.com/embed/mJVuZiK9a6I?si=PMM2VK7eZpzc2G5a" />
                <VideoCard title= "Family" url= "https://www.youtube.com/embed/a_YLU2qWnlA?si=VYdM2VACiVJJJtdE" />
                
            </div>
        </>
    );
}
