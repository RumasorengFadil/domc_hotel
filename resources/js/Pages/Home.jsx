import Button from "@/Components/Button";
import NavbarLayout from "@/Layouts/NavbarLayout";
import Background from "@/Layouts/Background";
import { Link, Head } from "@inertiajs/react";
import VisitorChart from "@/Components/VisitorChart";

export default function Home({ visitorData }) {
    return (
        <>
            <Head title="Home" />

            <Background backgroundImage={"/img/samHotel.png"}>
                <NavbarLayout />

                <h1 className="title">
                    QUALITY HOLIDAYS <br /> WITH US
                </h1>
                <p className="text">
                    Book your hotels service with us and enjoy a <br />
                    memorable journey.
                </p>

                <Button text={"Booking Now"} href={"/booking"}></Button>
            </Background>

            <div className="w-96 h-96 mx-auto mt-20 font-bold">
                <h1 className="text-4xl text-center mb-8">OUR VISITORS</h1>
                <VisitorChart visitorData={visitorData} />
            </div>
        </>
    );
}
