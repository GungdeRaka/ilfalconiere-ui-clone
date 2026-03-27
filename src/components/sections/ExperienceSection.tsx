"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { useRef, useState, useEffect } from "react";

export default function ExperienceSection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const isMobile = useIsMobile();
    // Bergerak dari kiri ke kanan saat scroll ke atas (atau kanan ke kiri saat scroll ke bawah)
    const playBtnX = useTransform(scrollYProgress, [0, 1], [230, -50]);
    const badgeY = useTransform(scrollYProgress, [0, 1], [90, -130]);
    const progressScaleX = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);
    const progressScaleX2 = useTransform(scrollYProgress, [0.5, 0.95], [0, 1]);

    return <section ref={sectionRef} className="pt-12 md:pt-24 overflow-hidden bg-brand-cream w-full">
        <div className="px-6 ">
            {/* header */}
            <h2 className="flex justify-start lg:mr-92 uppercase text-base/7 md:text-xl/7 md:font-medium tracking-[1em] text-brand-olive-dark font-sans">
                An Authentic Tuscan Experience
            </h2>
            {/* start icon and sticker */}
            <div className="flex flex-col md:flex-row gap-7 md:gap-10 justify-center items-center md:justify-between">
                <div className="flex justify-between w-screen px-4 md:h-[40vh] lg:h-screen md:w-auto items-center md:flex-col ">
                    {/* Icon Play Button */}
                    <motion.button
                        style={isMobile ? {} : { x: playBtnX }}
                        className="flex justify-between items-center gap-1 md:-ml-12 md:flex-col lg:flex-row lg:gap-3 text-accent-red-brown/40 font-sans cursor-pointer">
                        <div className="h-20 w-20 lg:h-24 lg:w-24 border-[3px] lg:border-4 rounded-full flex justify-center items-center">
                            {/* Simple Play Icon SVG */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rounded-2xl lg:h-16 lg:w-16 ml-2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>
                        <p className="text-base font-semibold tracking-widest uppercase">
                            Play
                        </p>
                    </motion.button>
                    {/* "Traveler" Sticker */}
                    <motion.div style={isMobile ? {} : { y: badgeY }}>
                        <Image
                            src="/images/logos/traveler-readers-choise-2023-il-falconiere-relais-chateaux-tuscany.png"
                            alt="Conde Nast Traveler 2023"
                            width={120}
                            height={120}
                            className="w-22 h-22 md:w-24 md:h-24 lg:w-32 lg:h-32  "
                        />
                    </motion.div>
                </div>

                {/* Image placeholder */}
                <div className="w-full aspect-video md:w-4/6 lg:aspect-10/9 xl:aspect-14/9 relative">
                    <Image
                        src="/images/il-falconiere-relais-chateaux-fallback.webp"
                        alt="Woman walking down stone steps in Tuscany"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
        <div className="hidden md:block w-full h-2 bg-brand-olive-dark/10">
            <motion.div
                style={{ scaleX: progressScaleX, originX: 0 }}
                className=" w-full h-2 bg-accent-red-brown/20"
            />
        </div>
        {/* Description Section (Exactly below the image) */}
        <div className="py-24 px-6 ">
            {/* Descriptions's title */}
            <h3 className="uppercase pb-14 text-base font-sans text-accent-red-brown/70 tracking-[0.2em]">
                Il Falconiere - Relais, Restaurant & Spa
            </h3>
            {/* Description's content */}
            <div className="flex pb-10 flex-col h-auto max-w-112.5 md:max-w-screen md:flex-row md:gap-10 ">
                {/* Main Copywriting */}
                <motion.h2
                    initial={{ opacity: 0, x: -100 }} // Mulai dari luar layar sebelah kiri (-100px)
                    animate={{ opacity: 1, x: 0 }}    // Berakhir di posisi aslinya (0)
                    transition={{ duration: 1.2 }}
                    className="text-[32px]/10 lg:text-[52px]/14 font-serif text-brand-sage/95 pb-8 ">
                    A love for the land and ancient traditions in an elegant wine resort in the heart of Tuscany
                </motion.h2>
                {/* Sub-copywriting + text button */}
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: -100 }} // Mulai dari luar layar sebelah kiri (-100px)
                        animate={{ opacity: 1, y: 0 }}    // Berakhir di posisi aslinya (0)
                        transition={{ duration: 1.2 }}
                        className="font-sans animate-slide-left text-brand-olive-dark pb-12 font-medium text-base/6 lg:text-base/8 tracking-[0.15em] ">
                        A magnificent 17th-century villa transformed into an exclusive residence of charm where one can spend precious moments for the soul, amidst the fragrances of a sunny land.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: -100 }} // Mulai dari luar layar sebelah kiri (-100px)
                        animate={{ opacity: 1, y: 0 }}    // Berakhir di posisi aslinya (0)
                        transition={{ duration: 1.2 }}

                        href="#"
                        className="relative group inline-flex items-center justify-center py-4 px-1 cursor-pointer">
                        <span className="absolute bottom-0 left-0 w-full h-px bg-brand-olive-dark opacity-0 transition-all duration-500 ease-out group-hover:bottom-full group-hover:opacity-100" />
                        {/* === TEKS === */}
                        <span className="font-sans uppercase text-[14px] tracking-[0.4em] text-brand-olive-dark font-medium z-10">
                            {/* Menggunakan &nbsp; untuk memberi jarak ekstra lebar antara READ dan HERE sesuai gambar */}
                            R E A D &nbsp;&nbsp;&nbsp; H E R E
                        </span>

                        {/* === GARIS BAWAH (STATIS) === */}
                        <span className="absolute bottom-0 left-0 w-full h-px bg-brand-olive-dark" />
                    </motion.a>

                </div>

            </div>
        </div>
        <div className="hidden  md:block w-full h-2 bg-brand-olive-dark/10">
            <motion.div
                style={{ scaleX: progressScaleX2, originX: 1 }}
                className="w-full h-2 bg-accent-red-brown/20"
            // Catatan: sesuaikan warnanya dengan milikmu jika menggunakan bg-accent-red-brown/20
            />
        </div>

    </section>
}


function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px)");

        // function handler
        const handleChange = () => {
            setIsMobile(media.matches);
        };

        // set initial value
        handleChange();

        // listen changes
        media.addEventListener("change", handleChange);

        return () => {
            media.removeEventListener("change", handleChange);
        };
    }, []);

    return isMobile;
}