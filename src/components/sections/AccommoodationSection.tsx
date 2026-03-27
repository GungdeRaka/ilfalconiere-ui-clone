"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SERVICES = [
    {
        id: 1,
        title: "SUITE",
        image: "/images/il-falconiere-relais-chateaux-fallback.webp", // Gunakan fallback milikmu sementara
    },
    {
        id: 2,
        title: "PRESTIGE SUITE",
        image: "/images/il-falconiere-relais-chateaux-fallback.webp",
    },
    {
        id: 3,
        title: "WINERY MASTER SUITE",
        image: "/images/il-falconiere-relais-chateaux-fallback.webp",
    },
    {
        id: 4,
        title: "CLASSIC ROOM",
        image: "/images/il-falconiere-relais-chateaux-fallback.webp",
    },
    {
        id: 5,
        title: "DELUXE ROOM",
        image: "/images/il-falconiere-relais-chateaux-fallback.webp",
    },
    {
        id: 6,
        title: "JUNIOR SUITE",
        image: "/images/il-falconiere-relais-chateaux-fallback.webp",
    },
    
];



export default function AccomodationSection() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Fungsi untuk berpindah ke slide berikutnya
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);
    };

    // 2. Auto-Play Logic (Ganti slide setiap 5 detik)
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer); // Bersihkan interval agar tidak memory leak
    }, []);

    // 3. Konfigurasi Arah Animasi
    // Teks: Muncul dari Kiri (-50), Keluar ke Kanan (50)
    const textVariants = {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 50, opacity: 0 },
    };

    // Gambar: Muncul dari Kanan (50), Keluar ke Kiri (-50)
    const imageVariants = {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 },
    };
    return <section className="w-full h-auto pt-12 md:pt-24 bg-brand-sage/20 overflow-x-hidden">
        <div className="px-6 md:px-12 max-w-400 mx-auto">
            <motion.div className='gap-5 flex flex-col'
                initial={{ opacity: 0, x: -100 }} // Mulai dari luar layar sebelah kiri (-100px)
                animate={{ opacity: 1, x: 0 }}    // Berakhir di posisi aslinya (0)
                transition={{ duration: 1.2 }}>
                <h2 className="uppercase text-accent-red-brown/90 tracking-[0.5em] text-base font-sans">Hospitality</h2>
                <p
                    className="font-sans animate-slide-left text-brand-olive-dark font-medium text-base/6 lg:text-base/8 tracking-[0.15em] ">
                    A magnificent 17th-century villa transformed into an exclusive residence of charm where one can spend precious moments for the soul, amidst the fragrances of a sunny land.
                </p>
            </motion.div>
            <div className="max-w-350 mx-auto pb-8 md:pb-32 relative">
                <div className="">
                    <h2 className="font-serif text-6xl pt-8 pb-4 text-white pr-[30vw]">Rooms and Suites</h2>
                    {/* Garis dekoratif statis di sebelah kiri (terlihat di screenshot) */}
                    <span className="absolute -ml-12 w-24 md:w-40 h-[1.5px] bg-brand-olive-dark/80"></span>
                </div>

                {/* Container Teks dengan tinggi statis agar layout tidak melompat */}
                <div className="md:ml-48 relative -mt-3 h-32 w-full max-w-lg">
                    {/* AnimatePresence mengelola elemen yang masuk dan keluar */}
                    <AnimatePresence>
                        <motion.div
                            key={currentIndex} // Key penting agar Framer Motion tahu kapan data berubah
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute top-0 left-0 flex flex-col items-start ml-28 w-full"
                        >
                            {/* Judul Berubah */}
                            <h3 className="text-lg -ml-6 md:text-2xl font-sans tracking-[0.4em] uppercase text-brand-olive-dark/75 mb-6">
                                {SERVICES[currentIndex].title}
                            </h3>

                            {/* Teks "Discover" & Garis (Bergerak bersama, namun teksnya statis) */}
                            <div className="inline-block relative cursor-pointer ml-12 group">
                                <p className="font-sans text-end text-sm font-semibold tracking-[1em] uppercase text-accent-red-brown/30 mb-2 group-hover:text-brand-olive-dark transition-colors">
                                    Discover
                                </p>
                                <div className="w-full h-px -pl-2 bg-accent-red-brown/30 group-hover:bg-brand-olive-dark transition-colors"></div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>

        {/* --- AREA BAWAH (GAMBAR & TOMBOL NEXT) --- */}
        <div className="relative w-full ">

            {/* Tombol Bulat Panah (Overlapping) */}
            <button
                onClick={nextSlide}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32  hover:bg-[#F1EFE3] shadow-[#F1EFE3] bg-brand-cream/70 rounded-full flex items-center justify-center z-20 shadow-sm group cursor-pointer"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-brand-olive-dark w-18 h-18">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            {/* Container Gambar */}
            <div className="relative w-full aspect-video md:aspect-auto md:h-[75vh] overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-screen h-auto aspect-video"
                    >
                        <Image
                            src={SERVICES[currentIndex].image}
                            alt={SERVICES[currentIndex].title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 90vw"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </section >
}