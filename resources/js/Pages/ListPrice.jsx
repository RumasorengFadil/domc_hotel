import Button from "@/Components/Button";
import NavbarLayout from "@/Layouts/NavbarLayout";
import Background from "@/Layouts/Background";
import { Link, Head } from "@inertiajs/react";
import HotelCard from "@/Components/HotelCard";
import PriceTable from "@/Components/PriceTable";

export default function ListPrice({}) {
    return (
        <>
            <Head title="ListPrice" />

            <Background backgroundImage={"/img/pola-bata.png"}>
                <NavbarLayout />

                <h1 className="title">OUR PRODUCTS</h1>
                
                <p className="text">
                    Our best prices
                </p>

                <div className="pricetable">

                    <PriceTable />
                </div>
            </Background>
        </>
    );
}
