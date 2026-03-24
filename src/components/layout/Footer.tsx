import Link from "next/link";
import Image from "next/image";
import { FiGift } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    // Extracted from your provided Elementor HTML
    const instagramFeed = [
        "https://www.ilfalconiere.it/wp-content/uploads/inavii-social-feed/17871512916579103-m.jpg",
        "https://www.ilfalconiere.it/wp-content/uploads/inavii-social-feed/18398760520144290-m.jpg",
        "https://www.ilfalconiere.it/wp-content/uploads/inavii-social-feed/18109336264761953-m.jpg",
        "https://www.ilfalconiere.it/wp-content/uploads/inavii-social-feed/18048282989716241-m.jpg",
        "https://www.ilfalconiere.it/wp-content/uploads/inavii-social-feed/17933332587206279-m.jpg"
    ];

    return (
        <footer className="font-sans w-full">
            {/* ===== TOP SECTION (Light Beige) ===== */}
            <div className="bg-brand-cream text-brand-olive-dark py-16 px-6 lg:px-12">
                <div className="max-w-350 mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
                    
                    {/* --- LEFT COLUMN: Links & Info --- */}
                    <div className="flex-1 flex flex-col gap-10">
                        
                        {/* Title Header */}
                        <Link href="https://www.ilfalconiere.it/en/gift-voucher/" className="flex items-center gap-3 w-fit group">
                            <FiGift className="text-2xl text-brand-olive-dark group-hover:text-black transition-colors" />
                            <span className="text-[14px] tracking-[0.2em] uppercase font-medium group-hover:text-black transition-colors">
                                Gift Il Falconiere
                            </span>
                        </Link>

                        {/* 2-Col Mobile / 4-Col Desktop Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 text-sm font-extralight font-sans text-brand-sage tracking-tight  leading-[1.8]">
                            
                            {/* Col 1: Address */}
                            <div className="flex flex-col leading-[1.2]">
                                <p>Loc. San Martino a Bocena, 370 Cortona (AR)</p>
                                <p>T +39.0575.612679</p>
                                <p>F +39.0575.612927</p>
                                <a href="mailto:info@ilfalconiere.it" className="hover:text-black transition-colors mt-1">
                                    info@ilfalconiere.it
                                </a>
                            </div>

                            {/* Col 2: Menus A */}
                            <div className="flex flex-col">
                                <Link href="#" className="hover:text-black transition-colors">The Baracchi Family</Link>
                                <Link href="#" className="hover:text-black transition-colors">Values and sustainability</Link>
                                <Link href="#" className="hover:text-black transition-colors">Services</Link>
                                <Link href="https://bottegabaracchishop.com" target="_blank" className="hover:text-black transition-colors">Bottega Baracchi</Link>
                            </div>

                            {/* Col 3: Menus B */}
                            <div className="flex flex-col">
                                <Link href="#" className="hover:text-black transition-colors">Cortona</Link>
                                <Link href="#" className="hover:text-black transition-colors">Distances</Link>
                                <Link href="#" className="hover:text-black transition-colors">Where we are</Link>
                                <button className="text-left hover:text-black transition-colors">Map</button>
                            </div>

                            {/* Col 4: Menus C */}
                            <div className="flex flex-col">
                                <Link href="#" className="hover:text-black transition-colors">Careers</Link>
                                <Link href="#" className="hover:text-black transition-colors">Contacts</Link>
                                <Link href="#" className="hover:text-black transition-colors">Privacy policy</Link>
                                <Link href="#" className="hover:text-black transition-colors">Cookie Policy</Link>
                            </div>

                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Socials & Instagram Grid --- */}
                    <div className="flex flex-col items-center lg:items-end w-full lg:w-auto gap-2 lg:gap-4 mt-4 lg:mt-0">
                        
                        {/* Social Icons (Top Right on Desktop, Center on Mobile) */}
                        <div className="flex gap-4 lg:w-full lg:justify-end">
                            <a href="https://www.facebook.com/IlFalconiereRelaisChateaux" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-sage hover:bg-brand-olive-dark hover:text-white transition-all duration-300">
                                <FaFacebookF className="text-sm" />
                            </a>
                            <a href="https://www.linkedin.com/in/relais-il-falconiere-3743275b/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-sage hover:bg-brand-olive-dark hover:text-white transition-all duration-300">
                                <FaLinkedinIn className="text-sm" />
                            </a>
                        </div>
                        
                        {/* F Logo & Instagram Grid Wrapper */}
                        <div className="flex flex-col items-center lg:items-start lg:w-fit mt-2">
                            
                            {/* 'F' Logo Icon */}
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm  font-serif text-xl leading-none mb-6">
                                <Image src={"/footer-images/floating-f-logo.jpg"}
                                    alt={"Il-Falconiere-Logo"}
                                    height={28}
                                    width={28}
                                    className="rounded-full"
                                />
                            </div>

                            {/* Instagram Wave Layout */}
                            {/* Mobile: 2x2 Grid. Desktop: 5 in a row flexbox */}
                            <div className="grid grid-cols-3 pt-2 lg:flex lg:flex-row gap-4 lg:gap-3">
                                {instagramFeed.map((imgSrc, index) => (
                                    <a 
                                        href="https://www.instagram.com/ilfalconiere" 
                                        target="_blank"
                                        rel="noreferrer"
                                        key={index}
                                        className={`relative w-40 h-40 lg:w-21 lg:h-21 rounded-xl overflow-hidden block group shadow-sm transition-transform duration-300 hover:scale-105 
                                            ${index == 1 || index == 4 ? "-translate-y-6" : ""} 
                                
                                            ${index >= 3 ? "block lg:hidden" : ""}
                                        `}
                                    >
                                        <Image 
                                            src={imgSrc}
                                            alt={`Instagram post ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 160px, 84px"
                                        />
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ===== BOTTOM SECTION (Dark Olive Copyright) ===== */}
            <div className="bg-brand-olive-dark text-brand-cream/80 py-8 px-6 lg:px-12 text-[11px] font-serif font-light leading-5">
                <div className="max-w-350 mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-12">
                    
                    {/* Left Legal Text */}
                    <div className="md:w-1/2">
                        <p>© 2026 Il Falconiere. All rights reserved. CIN: IT051017A1GB52NTSP</p>
                        <p>P.IVA 01742090515 - REA AR 135931 - Capitale Sociale Versato 50.000</p>
                    </div>

                    {/* Right Awards Text */}
                    <div className="md:w-1/2">
                        <p>Il Falconiere Restaurant * 1 Michelin star ”Italia’s Top Hotel - 3rd in Europe - 6th in the World”, Travel & Leisure 2007 – 2008 “400 The World Best Hotels”, Forbes Traveller</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}