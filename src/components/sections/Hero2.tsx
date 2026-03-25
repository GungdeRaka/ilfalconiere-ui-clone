"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);

    // Create the Parallax Effect for the text
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative w-full h-screen overflow-hidden bg-brand-olive-dark flex items-center justify-center">

            {/* 1. Vimeo Background Video */}
            <div className="absolute inset-0 overflow-hidden">
                <iframe
                    src="https://player.vimeo.com/video/1166343345?autoplay=1&muted=1&loop=1&background=1"
                    className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 "
                    allow="autoplay; fullscreen"/>
            </div>

        
            {/* 2. Hero Content (with Parallax applied) */}
            <div

                className="relative z-10 flex pt-72 md:pt-64 flex-col items-center text-center text-white px-12 w-full"
            >

                {/* Main Heading (Slide up + Fade in) */}

                <motion.h1
                    className="text-4xl md:text-5xl md:pt-152 font-serif mb-6 font-normal tracking-tight"
                >All the flavor of a beautiful dream</motion.h1>

                {/* Links List (Staggered Fade in) */}
                <div
                    className="hidden md:flex flex-wrap justify-center gap-12 lg:gap-20 mb-20"
                >
                    <HeroLink title="Resort" subtitle="Rooms and Suites" href="#" />
                    <HeroLink title="Dining" subtitle="1 Michelin Star" href="#" />
                    <HeroLink title="Wellness" subtitle="Spa and nature" href="#" />
                    <HeroLink title="Tuscany" subtitle="Ancient Traditions" href="#" />
                </div>

                {/* Relais & Chateaux Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <Image
                        src="/logos/relais-chateaux-il-borro-toscana-white.svg"
                        alt="Relais & Chateaux"
                        width={45}
                        height={47}
                        className="w-13 h-auto opacity-90"
                    />
                </motion.div>

            </div>
        </section>
    );
}

// Sub-component for the hero links to keep code clean
function HeroLink({ title, subtitle, href }: { title: string, subtitle: string, href: string }) {
    return (
        <Link href={href} className="flex items-center gap-3 group">
            <div className="text-left">
                <span className="block font-serif text-2xl tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                    {title}
                </span>
                <span className="block font-sans text-[11px] uppercase tracking-[0.2em] opacity-80 mt-1 group-hover:opacity-100 transition-opacity">
                    {subtitle}
                </span>
            </div>
        </Link>
    );
}