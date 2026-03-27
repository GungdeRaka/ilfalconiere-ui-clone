"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);

    // Create the Parallax Effect for the text
    const { scrollY } = useScroll();
    const headingY = useTransform(scrollY, [0, 150, 600], [0, 0, -150]);
    const headingOpacity = useTransform(scrollY, [0, 200, 600], [1, 1, 0]);
    const menuLogoOpacity = useTransform(scrollY, [0, 200, 600], [1, 1, 0]);

    return (
        <section ref={ref} className="relative w-screen h-auto  bg-brand-olive-dark flex items-start justify-center">
            <div className="relative w-screen h-screen md:h-[145vh] lg:h-screen overflow-hidden bg-brand-olive-dark">
                <iframe
                    src="https://player.vimeo.com/video/1166343345?autoplay=1&muted=1&loop=1&background=1"
                    className={`absolute top-1/2 left-1/2 w-screen h-[56.25vw] md:min-h-[145vh] md:min-w-[257.77vh] min-w-[177.77vh] min-h-screen -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
                    allow="autoplay; fullscreen"
                />
                {/* Overlay Gambar (Dibuat absolute agar numpuk di atas video) */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none z-10"></div>
            </div>
            <div className="top-[40vh] md:top-[95vh] lg:top-[50vh] xl:top-[74vh]  mb-vh text-brand-cream z-10 absolute">
                <motion.div className="flex flex-col items-center gap-y-3 justify-center">
                    {/* --- HEADING --- */}
                    {/* Wrapper 1: Menangani animasi saat website BARU DIBUKA (Fade in & slide up) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                    >
                        {/* Wrapper 2: Menangani efek saat di-SCROLL (Terangkat & Fade out) */}
                        <motion.h2
                            style={{ y: headingY, opacity: headingOpacity }}
                            className="text-4xl md:text-5xl lg:text-6xl text-center font-serif font-normal tracking-tight mx-10 lg:mx-14 "
                        >
                            All the flavor of a beautiful dream
                        </motion.h2>
                    </motion.div>


                    {/* --- HERO MENU --- */}
                    {/* Animasi Masuk: Delay 0.3s agar muncul setelah heading */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {/* Animasi Scroll: Memudar saat mendekati atas */}
                        <motion.div
                            style={{ opacity: menuLogoOpacity }}
                            className="hidden md:flex md:flex-wrap md:justify-end lg:justify-center md:mr-26 md:pb-9 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-9 xl:gap-x-5"
                        >
                            <HeroLink title="Resort" subtitle="Rooms and Suites" href="#" />
                            <HeroLink title="Dining" subtitle="1 Michelin Star" href="#" />
                            <HeroLink title="Wellness" subtitle="Spa and nature" href="#" />
                            <div className="col-span-1 lg:col-span-3 xl:col-span-1">
                                <HeroLink title="Tuscany" subtitle="Ancient Traditions" href="#" />
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* --- LOGO --- */}
                    {/* Animasi Masuk: Delay 0.5s agar muncul paling terakhir (efek berurutan) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        // Digabung ke div yang sama karena efek transformnya sederhana (hanya opacity)
                        style={{ opacity: menuLogoOpacity }}
                    >
                        <Image
                            src={"/images/logos/relais-chateaux-il-borro-toscana-white.svg"}
                            width={50}
                            height={50}
                            alt="relais-chateaux-il-borro-toscana"
                        />
                    </motion.div>

                </motion.div>
            </div>


        </section>
    );
}

// Sub-component for the hero links to keep code clean
function HeroLink({ title, subtitle, href, }: { title: string, subtitle: string, href: string }) {
    return (
        <Link href={href} className="flex flex-row items-center justify-center gap-3 group text-brand-cream">
            <div className="text-end">
                <span className="pr-3 font-sans tracking-widest text-2xl xl:text-[28px]  uppercase font-medium group-hover:text-brand-gold transition-colors duration-300">
                    {title}
                </span>
                <span className=" font-serif text-base tracking-tight mt-1 group-hover:opacity-100 transition-opacity">
                    {subtitle}
                </span>
            </div>
        </Link>
    );
}