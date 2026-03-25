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
    const playBtnX = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const badgeY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const progressScaleX = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);


    return <section ref={sectionRef} className="py-12 md:py-24 px-6 overflow-hidden bg-brand-cream w-full">
        <div>
            {/* header */}
            <h2 className="flex justify-start lg:mr-92 uppercase text-base/7 md:text-xl/7 md:font-medium tracking-[1em] text-brand-olive-dark font-sans">
                An Authentic Tuscan Experience
            </h2>
            {/* start icon and sticker */}
            <div className="flex flex-col md:flex-row gap-7 md:gap-10 justify-center items-center md:justify-between">
                <div className="flex justify-between w-screen px-4 md:h-[40vh] lg:h-screen md:w-auto items-center md:flex-col ">
                    {/* Icon Play Button */}
                    <motion.button
                        style={isMobile?{}:{ x: playBtnX }}
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
                    <motion.div style={isMobile?{}:{ y: badgeY }}>
                        <Image 
                            src="/logos/traveler-readers-choise-2023-il-falconiere-relais-chateaux-tuscany.png"
                            alt="Conde Nast Traveler 2023"
                            width={120}
                            height={120}
                            className="w-22 h-22 md:w-24 md:h-24 lg:w-32 lg:h-32  "
                        />
                    </motion.div>
                </div>

                {/* Image placeholder */}
                <div className="w-full aspect-video md:w-4/6 lg:w-4/6 lg:aspect-10/9 xl:aspect-14/9 relative">
                    <Image
                        src="/images/il-falconiere-relais-chateaux-fallback.webp"
                        alt="Woman walking down stone steps in Tuscany"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
            <div className="hidden md:block w-full h-2 bg-brand-olive-dark/10">
                <motion.div
                    style={{ scaleX: progressScaleX, originX: 0 }}
                    className=" w-full h-2 bg-accent-red-brown/20"
                />
            </div>
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