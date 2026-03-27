"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence, useTransform } from "framer-motion";
import Image from "next/image";

const SERVICES = [
    {
        id: 1,
        title: "SUITE",
        image: "/images/carousel-images/executive-suite-affreschi-il-falconiere-toscana.webp",
    },
    {
        id: 2,
        title: "PRESTIGE SUITE",
        image: "/images/carousel-images/prestige-suite-33-main-il-falconiere-toscana.webp",
    },
    {
        id: 3,
        title: "WINERY MASTER SUITE",
        image: "/images/carousel-images/falconiere-winery-master-suite-living.webp",
    },
    {
        id: 4,
        title: "CLASSIC ROOM",
        image: "/images/carousel-images/falconiere-camera-classic-letto-matrimoniale.webp",
    },
    {
        id: 5,
        title: "DELUXE ROOM",
        image: "/images/carousel-images/camera-deluxe-10-affreschi-il-falconiere-toscana.webp",
    },
    {
        id: 6,
        title: "JUNIOR SUITE",
        image: "/images/carousel-images/junior-suite-camino-il-falconiere-toscana.webp",
    },
];

export default function AccomodationSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);
    };

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const progressScaleX2 = useTransform(scrollYProgress, [0.5, 0.95], [0, 1]);
    useEffect(() => {
        const timer = setInterval(nextSlide, 10000);
        return () => clearInterval(timer);
    }, []);

    const textVariants = {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 100, opacity: 0 },
    };

    const imageVariants = {
        initial: { x: 300, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -200, opacity: 0 },
    };

    return (
        <section  className="w-full h-auto relative z-10 pt-12 md:pt-24 bg-brand-sage/20 overflow-x-hidden">

            {/* --- INTRO TEXT (HOSPITALITY) --- */}
            {/* Tetap full width dengan padding standar */}
            <div className="px-6 max-w-4xl ">
                <motion.div
                    className="gap-5 flex flex-col"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h2 className="uppercase text-accent-red-brown/90 tracking-[0.5em] text-base font-sans">
                        Hospitality
                    </h2>
                    <p className="font-sans md:pr-8 animate-slide-left text-brand-olive-dark font-medium text-base/6 lg:text-base/8 tracking-[0.15em] lg:max-w-2/3 lg:tracking-[0.35em] ">
                        The frescoes on the walls, the antique furniture, the beautiful wrought iron or four-poster beds, marry a choice of delicate and relaxing colors
                    </p>
                </motion.div>
            </div>
            {/* --- CAROUSEL WRAPPER (TWO COLUMNS ON DESKTOP) --- */}
            {/* Menggunakan flex-col untuk mobile, dan md:flex-row untuk membaginya jadi kiri-kanan di desktop */}
            <div className="relative w-full flex flex-col md:max-h-1/3 md:flex-row md:items-center mt-12 ">

                {/* --- KOLOM KIRI: TEKS --- */}
                <div className="w-full px-6 lg:px-2 md:w-[45%] lg:w-[40%] md:pb-0 flex flex-col justify-center relative">

                    {/* Judul Statis */}
                    <div className="relative z-10">
                        {/* Menambahkan <br> khusus desktop agar teks turun seperti di screenshot */}
                        <h2 className="font-serif text-6xl/13 md:text-5xl/11 lg:text-[68px]/17 pt-8 lg:-mt-28 lg:-ml-1 text-white">
                            Rooms <br />and Suites
                        </h2>

                    </div>

                    {/* Container Animasi Teks */}
                    <div className="relative mt-2 h-32 w-full max-w-lg z-10">
                        <span className="absolute -ml-12 md:ml-0 md:-left-12 w-24 md:w-19 h-px bg-brand-olive-dark/80"></span>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                // Penyesuaian posisi: di mobile agak ke tengah, di desktop rata kiri
                                className="absolute -top-3 left-1/3 md:left-14 flex flex-col items-start w-full"
                            >
                                <h3 className="text-lg md:text-base lg:text-lg lg:max-w-60 -ml-6 font-sans tracking-[0.4em] uppercase text-brand-olive-dark/75 mb-6">
                                    {SERVICES[currentIndex].title}
                                </h3>

                                <div className="inline-block relative cursor-pointer lg:pt-28 lg:ml-14 group">
                                    <p className="font-sans text-end md:text-left text-sm font-semibold tracking-[1em] uppercase text-accent-red-brown/30 mb-2 group-hover:text-brand-olive-dark group-hover:ease-in-out transition-colors">
                                        Discover
                                    </p>
                                    <div className="w-full h-px bg-accent-red-brown/30 group-hover:ease-in-out group-hover:bg-brand-olive-dark transition-colors"></div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- KOLOM KANAN: GAMBAR & TOMBOL --- */}
                <div className="relative w-full md:w-[80%] lg:w-full h-auto aspect-video md:aspect-auto md:h-[60vh] lg:h-[90vh] mt-4 ">

                    {/* Tombol Bulat Panah (Overlapping) */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-0 left-1/2 md:top-1/2 md:left-0 -translate-x-1/2 -translate-y-1/2 w-18 h-18 lg:w-24 lg:h-24 hover:bg-[#F1EFE3] shadow-[#F1EFE3] bg-brand-cream/90 rounded-full flex items-center justify-center z-20 shadow-sm group cursor-pointer"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-brand-olive-dark w-12 h-12 md:w-16 md:h-16">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    {/* Container Gambar */}
                    <div ref={sectionRef} className="relative w-full h-full z-10 overflow-hidden">
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={currentIndex}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={SERVICES[currentIndex].image}
                                    alt={SERVICES[currentIndex].title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                {/* White-bg stacked */}
                <div className="bg-brand-cream md:h-42 lg:h-65 w-full bottom-0 absolute"></div>
            </div>
            <div className="bg-brand-cream h-20 w-full bottom-0 relative">
            </div>
            <div className="hidden  md:block w-full h-2 bg-accent-red-brown/10">
                <motion.div
                    style={{ scaleX: progressScaleX2, originX: 0 }}
                    className="w-full h-2 bg-brand-cream"
                // Catatan: sesuaikan warnanya dengan milikmu jika menggunakan bg-accent-red-brown/20
                />
            </div>
        </section>
    );
}