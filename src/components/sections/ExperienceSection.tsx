"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ExperienceSection() {
    return <section className="py-12 md:py-24 px-6 bg-brand-cream w-full">
        <div>
            <h2 className="flex justify-start lg:mr-70 uppercase text-base/7 md:text-xl/7 md:font-medium tracking-[1em] text-brand-olive-dark font-sans">An Authentic Tuscan Experience</h2>
            <div className="flex flex-col md:flex-row my-8 gap-7 md:gap-18 justify-center items-center md:justify-end">
                <div className="flex gap-8 md:flex-col ">
                    <div className="flex justify-between ml-4 md:ml-0 items-center gap-1 md:flex-col lg:flex-row lg:gap-3 text-accent-red-brown/40 font-sans">
                        {/* Icon Play Button */}
                        <div className="h-20 w-20 lg:h-24 lg:w-24 border-[3px] rounded-full flex justify-center items-center">
                            {/* Simple Play Icon SVG */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rounded-2xl lg:h-16 lg:w-16 ml-2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>
                        <p className="text-base font-semibold tracking-widest uppercase">
                            Play
                        </p>
                    </div>
                    {/* "Traveler" Sticker */}

                    <Image
                        src="/logos/traveler-readers-choise-2023-il-falconiere-relais-chateaux-tuscany.png"
                        alt="Conde Nast Traveler 2023"
                        width={120}
                        height={120}
                        className="w-24 h-24 object-contain lg:relative lg:top-18 lg:-left-20"
                    />

                </div>
                {/* Image placeholder */}
                <div className="w-full aspect-video md:w-4/6 relative">
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
    </section>
}