"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-in-out text-white ${isScrolled ? "bg-brand-olive-dark/80 py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            
            <div className="max-w-400 mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-3 items-center">

                {/* COLUMN 1: Left Menu */}
                <div className="flex flex-col">
                   

                    {/* Desktop links extracted from the HTML */}
                    <nav className=" text-[14px] inline tracking-[-0.05px] uppercase">
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-3 font-sans font-semibold">The Relais</Link>
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-3 font-sans font-semibold">Gift & Offers</Link>
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-3 font-sans font-semibold">Baracchi Winery</Link>
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-3 font-sans font-semibold">Shop</Link>
                    </nav>
                     <button className="flex items-center pt-1 gap-3 text-[14px] font-bold tracking-[0.15em] uppercase font-sans group">
                        MENU
                        <div className="flex flex-col gap-1.5">
                            <span className="block w-8 h-px bg-white group-hover:w-10 transition-all duration-300"></span>
                            <span className="block w-8 h-px bg-white group-hover:w-10 transition-all duration-300"></span>
                        </div>
                    </button>
                </div>

                {/* COLUMN 2: Center Logo */}
                <div className="flex flex-col items-center justify-center">
                    <Link href="/" className="flex flex-col items-center gap-2">
                        <Image
                            src="https://www.ilfalconiere.it/wp-content/uploads/2023/12/il-falconiere-logo-white.png"
                            alt="Il Falconiere Logo"
                            width={300}
                            height={30}
                            priority
                            className="w-44 md:w-50 lg:w-56 h-auto object-contain"
                        />
                        {/* Extracted from your HTML snippet */}
                        <span className="font-sans text-[11px] tracking-[0.3em] uppercase">
                            Relais & Spa
                        </span>
                    </Link>
                </div>

                {/* COLUMN 3: Right Action Buttons (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center justify-end gap-4 font-sans text-[11px] font-bold tracking-widest uppercase">

                    <Link href="#" className="flex items-center group">
                        {/* The pulsing icon button structure */}
                        <div className="relative inline-block">
                            {/* CTA */}
                            <Link
                                href="https://www.ilfalconiere.it/en/holiday-offers-tuscany/"
                                className="group flex items-center border border-white  bg-accent-red-brown/30 backdrop-blur-sm "
                            >
                                {/* Icon + Pulse */}
                                <div className="relative flex items-center justify-center">
                                <span className="absolute z-10 inline-flex h-9 w-[94px] border-3 border-white opacity-75 pulse-soft"></span>
                                    {/* Text */}
                                    <div className="text-white  font-light leading-tight uppercase px-2 py-1 text-xs">
                                        Special<br />Promo
                                    </div>
                                    {/* Spacing */}
                                

                                    {/* Icon */}
                                    <div className="relative text-white text-xl bg-accent-red-brown px-2 py-1">
                                        %
                                    </div>
                                </div>


                            </Link>
                            {/* End CTA */}
                        </div>
                    </Link>

                    {/* This will eventually trigger our modal, but for now it's a button */}
                    <button className="border font-serif text-lg border-white px-4 py-1 bg-white/20 hover:bg-white hover:text-brand-olive-dark transition-colors">
                        Book Here
                    </button>

                </div>
            </div>
        </header>
    );
}