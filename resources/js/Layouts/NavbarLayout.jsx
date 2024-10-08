import { useState } from "react";

export default function NavbarLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="nav p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    <a className="oswald font-bold" href="/">Dominic</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="nav-link text-white hover:text-gray-400">HOME</a>
                    <a href="/product" className="nav-link text-white hover:text-gray-400">PRODUK</a>
                    <a href="/list-price" className="nav-link text-white hover:text-gray-400">DAFTAR HARGA</a>
                    <a href="/about-us" className="nav-link text-white hover:text-gray-400">TENTANG KAMI</a>
                    <a href="/booking" className="nav-link text-white hover:text-gray-400">BOOKING</a>
                    <a href="/booking-list" className="nav-link text-white hover:text-gray-400">BOOKING LIST</a>
                    {/* <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="nav-link text-white hover:text-gray-400 focus:outline-none"
                        >
                            More
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                <a href="/services" className="block oswald px-4 py-2 text-gray-800 hover:bg-gray-100">Services</a>
                                <a href="/contact" className="block oswald px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
                            </div>
                        )}
                    </div> */}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4">
                    <a href="/" className="block text-white hover:text-gray-400 py-2">HOME</a>
                    <a href="/product" className="block text-white hover:text-gray-400 py-2">PRODUK</a>
                   
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="oswald block w-full text-left text-white hover:text-gray-400 focus:outline-none py-2"
                        >
                            MORE
                        </button>
                        {isDropdownOpen && (
                            <div className="mt-2 bg-white rounded-md shadow-lg z-20">
                                <a href="/list-price" className="block oswald px-4 py-2 text-gray-800 hover:bg-gray-100">DAFTAR HARGA</a>
                                <a href="/about-us" className="block oswald px-4 py-2 text-gray-800 hover:bg-gray-100">TENTANG KAMI</a>
                                <a href="/booking" className="block oswald px-4 py-2 text-gray-800 hover:bg-gray-100">BOOKING</a>
                                <a href="/booking-list" className="block oswald px-4 py-2 text-gray-800 hover:bg-gray-100">BOOKING LIST</a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}