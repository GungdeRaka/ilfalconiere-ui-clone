"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ExperienceSection() {
    const sectionRef = useRef(null);

    // Memantau seberapa jauh section ini telah di-scroll di dalam viewport
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // Animasi dimulai saat ujung atas section menyentuh ujung bawah layar
        // dan berakhir saat ujung bawah section menyentuh ujung atas layar
        offset: ["start end", "end start"]
    });

    // 1. Animasi Play Button: 
    // Bergerak dari kiri ke kanan saat scroll ke atas (atau kanan ke kiri saat scroll ke bawah)
    const playBtnX = useTransform(scrollYProgress, [0, 1], [50, -50]);

    // 2. Animasi Badge Traveler: 
    // Terangkat ke atas (sumbu Y negatif) seiring kita scroll ke bawah
    const badgeY = useTransform(scrollYProgress, [0, 1], [80, -100]);

    // 3. Progress Bar Indicator:
    // Skala (lebar) bertambah dari 0 ke 1 seiring kita scroll melewati section ini
    const progressScaleX = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

    return (
        <section ref={sectionRef} className="relative w-full bg-brand-cream pt-24 md:pt-40 pb-16 overflow-hidden">
            <div className="max-w-350 mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
                
                {/* KOLOM KIRI (Teks & Tombol) */}
                <div className="flex flex-col gap-12 md:gap-20">
                    
                    {/* Heading dengan spasi huruf yang sangat lebar */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-brand-olive-dark font-sans uppercase tracking-[0.4em] md:tracking-[0.6em] leading-[2.5] md:leading-[2.5]">
                        An Authentic <br />
                        Tuscan <br />
                        Experience
                    </h2>

                    {/* Container untuk Tombol Play dan Badge */}
                    <div className="flex items-center gap-8 md:gap-16">
                        
                        {/* Tombol Play (Bergerak Horizontal) */}
                        <motion.button 
                            style={{ x: playBtnX }}
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-brand-olive-dark/30 flex items-center justify-center group-hover:bg-brand-olive-dark/5 transition-colors duration-300">
                                {/* Simple Play Icon SVG */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-olive-dark ml-2">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                            <span className="font-sans uppercase tracking-[0.3em] text-sm text-brand-olive-dark/60 group-hover:text-brand-olive-dark transition-colors">
                                Play
                            </span>
                        </motion.button>

                        {/* Badge Traveler (Bergerak Vertikal / Parallax) */}
                        <motion.div style={{ y: badgeY }}>
                            <Image 
                                // Menggunakan URL asli dari Elementor yang kamu berikan sebelumnya
                                src="/logos/traveler-readers-choise-2023-il-falconiere-relais-chateaux-tuscany.png" 
                                alt="Conde Nast Traveler 2023"
                                width={120}
                                height={120}
                                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                            />
                        </motion.div>

                    </div>
                </div>

                {/* KOLOM KANAN (Gambar) */}
                <div className="w-full h-[50vh] md:h-[80vh] relative">
                    <Image
                        // Pastikan kamu mengganti src ini dengan gambar aslinya (simpan di folder /public/images/)
                        src="/images/il-falconiere-relais-chateaux-fallback.webp" 
                        alt="Woman walking down stone steps in Tuscany"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

            </div>

            {/* PROGRESS BAR INDICATOR */}
            {/* Berada tepat di bawah section ini, memanjang seiring scroll */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-brand-olive-dark/10">
                <motion.div 
                    style={{ scaleX: progressScaleX, originX: 0 }}
                    className="w-full h-0.5 bg-brand-olive-dark"
                />
            </div>
        </section>
    );
}