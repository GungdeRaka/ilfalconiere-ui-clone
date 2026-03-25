"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ExperienceSection() {
    return <section className="py-12 px-6 bg-brand-cream w-full">
        <div>
            <h2 className="uppercase text-base/7 tracking-[1em] text-brand-olive-dark/80 font-sans">An Authentic Tuscan Experience</h2>
            <div className="flex flex-col my-8 gap-7 justify-center item-center">
                <div className="flex justify-between ">
                    <div className="flex justify-center ml-4 items-center gap-1 text-accent-red-brown/40 font-sans">
                        <div className="h-20 w-20 border-[3px] rounded-full flex justify-center items-center">
                            {/* Simple Play Icon SVG */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="rounded-2xl  ml-2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>
                        <p className="text-base font-semibold tracking-widest uppercase">
                            Play
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/logos/traveler-readers-choise-2023-il-falconiere-relais-chateaux-tuscany.png"
                            alt="Conde Nast Traveler 2023"
                            width={120}
                            height={120}
                            className="w-24 h-24 md:w-32 md:h-32 object-contain"
                        />
                    </div>
                </div>
                {/* Image placeholder */}
              <div className="w-full aspect-video md:aspect-3/2 relative">
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
        </div>
    </section>
}