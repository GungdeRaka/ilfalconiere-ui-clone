"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMathPercent } from "react-icons/cg";
import { IoMdSnow } from "react-icons/io";

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
            className={`fixed top-0 pt-3.5 pb-1 md:py-2.5 left-0 w-full z-50 transition-colors duration-500 ease-in-out text-white ${isScrolled ? "bg-brand-olive-dark/90 shadow-lg" : "bg-transparent "
                }`}
        >

            <div className="max-w-500 px-4 md:px-6 flex justify-between md:grid md:grid-cols-3 md:items-center">

                {/* COLUMN 1: Left Menu */}
                <div className="flex flex-col">


                    {/* Desktop links extracted from the HTML */}
                    <nav className="hidden md:flex-wrap md:flex  items-center text-[12px] tracking-[-0.05px] uppercase whitespace-nowrap">
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-2.5 font-sans font-semibold">The Relais</Link>
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-2.5 font-sans font-semibold">Gift & Offers</Link>
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-2.5 font-sans font-semibold">Baracchi Winery</Link>
                        <Link href="#" className="hover:text-olive-200 transition-colors pr-2.5 font-sans font-semibold">Shop</Link>
                    </nav>
                    <button className="flex items-center md:pt-1 gap-3 text-sm font-semibold tracking-tight uppercase font-sans group cursor-pointer">
                        MENU
                        <div className="flex flex-col gap-1.5">
                            <span className="block w-8 font-extralight h-px bg-white/70 duration-300"></span>
                            <span className="block w-8 font-extralight h-px bg-white/70 transition-all duration-300 ease-out group-hover:translate-y-1.5"></span>
                        </div>
                    </button>
                </div>

                {/* COLUMN 2: Center Logo */}
                <div className="flex flex-col items-center justify-center">
                    <Link href="/" className="flex flex-col items-center gap-1">
                        <Image
                            src="/logos/il-falconiere-logo-white.png"
                            alt="Il Falconiere Logo"
                            width={280}
                            height={40}
                            priority
                            className="w-62 md:w-50 lg:w-68 h-auto object-contain"
                        />
                        {/* Extracted from your HTML snippet */}
                        <span className="font-sans text-[11px] tracking-[0.3em] uppercase">
                            Relais & Spa
                        </span>
                    </Link>
                </div>

                {/* COLUMN 3: Right Action Buttons (Hidden on Mobile) */}
                <div className="hidden md:flex gap-2 lg:gap-4 items-center justify-end font-sans text-[11px] font-bold tracking-widest uppercase">

                    {/* Pulsing CTA Discount */}
                    <Link href="https://www.ilfalconiere.it/en/holiday-offers-tuscany/" className="flex md:hidden lg:block items-center group">
                        {/* The pulsing icon button structure */}
                        <div className="relative inline-block">
                            {/* CTA */}
                            <div

                                className="group flex items-center border border-white  bg-accent-red-brown/30 backdrop-blur-sm "
                            >
                                {/* Icon + Pulse */}
                                <div className="relative flex items-center justify-center">
                                    <span className="absolute z-10 inline-flex h-9 w-23.5 border-3 border-white opacity-75 pulse-soft"></span>
                                    {/* Text */}
                                    <div className="text-white font-medium md:font-semibold leading-tight uppercase px-2  text-xs">
                                        Special<br />Promo
                                    </div>
                                    {/* Spacing */}


                                    {/* Icon */}

                                    <CgMathPercent className="relative text-white font-extralight text-[42px] bg-accent-red-brown/70 px-2  " />
                                </div>


                            </div>
                            {/* End CTA */}
                        </div>
                    </Link>

                    {/* This will eventually trigger our modal, but for now it's a button */}
                    <button className="border flex md:block items-center gap-2  font-serif text-base uppercase tracking-normal font-semibold md:border-white px-2 md:px-5 py-2 md:bg-white/10 bg-brand-sage hover:bg-white hover:text-brand-olive-dark transition-colors">
                        Book Here <IoMdSnow className="md:hidden" />
                    </button>

                </div>

                {/* CTA BOTTOM */}
                <div className="top-9/10 md:top-13/14 lg:flex right-2 left-2 fixed flex items-between justify-between font-sans text-[11px] font-bold tracking-widest uppercase">

                    {/* Pulsing CTA Discount */}
                    <Link href="https://www.ilfalconiere.it/en/holiday-offers-tuscany/" className="flex top-198 left-5 items-center group">

                        {/* CTA */}
                        <div className="group flex items-center bg-accent-red-brown/30 backdrop-blur-sm ">
                            {/* Icon + Pulse */}
                            <div className="relative md:flex lg:hidden flex items-center justify-center">
                                <span className="absolute z-10 inline-flex h-9 w-23.5 border-3 border-white opacity-75 pulse-soft"></span>
                                {/* Text */}
                                <div className="text-white font-medium md:font-semibold leading-tight uppercase px-2  text-xs">
                                    Special<br />Promo
                                </div>
                                {/* Spacing */}
                                {/* Icon */}
                                <CgMathPercent className="relative text-white font-extralight text-[42px] bg-accent-red-brown/70 px-2  " />
                            </div>
                        </div>
                        {/* End CTA */}
                    </Link>

                    {/* This will eventually trigger our modal, but for now it's a button */}
                    <button className=" flex items-center gap-2  font-serif text-base uppercase tracking-normal font-semibold md:hidden lg:flex lg:hidden px-2 lg:px-5 py-2  bg-brand-sage hover:bg-white hover:text-brand-olive-dark transition-colors">
                        Book Here <IoMdSnow className="md:hidden lg:block" />
                    </button>

                </div>
            </div>
        </header>
    );
}