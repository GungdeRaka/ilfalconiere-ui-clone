import Link from "next/link";
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiGift } from "react-icons/ci";


export default function Footer() {
    return (
        <footer className="bg-brand-cream text-brand-olive-dark pt-16  font-sans">

            {/* Top Main Footer Area */}
            <div className="max-w-350 mx-auto px-6 md:px-12 pb-16 grid grid-cols-1 md:grid-cols-5 gap-2">

                {/* Contact Column */}
                <div className="flex flex-col  text-[14px] leading-relaxed col-span-1">
                    <div className="flex items-center gap-2 text-brand-sage -mt-2 mb-6">
                        {/* Simple present icon placeholder */}
                        <CiGift className="text-2xl font-light" />
                        <h3 className="uppercase tracking-[0.15em] text-sm font-bold">Gift Il Falconiere</h3>
                    </div>
                    <p>Loc. San Martino a Bocena, 370<br />Cortona (AR)</p>
                    <p>T +39.0575.612679</p>
                    <p>F +39.0575.612927</p>
                    <Link href="mailto:info@ilfalconiere.it" className="hover:text-brand-sage transition-colors">
                        info@ilfalconiere.it
                    </Link>
                </div>

                {/* Links Column 1 */}
                <div className="flex flex-col gap-2 text-brand-sage text-[14px] mt-10">
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">The Baracchi Family</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Values and sustainability</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Services</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Bottega Baracchi</Link>
                </div>

                {/* Links Column 2 */}
                <div className="flex flex-col gap-2 text-brand-sage text-[14px] mt-10">
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Cortona</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Distances</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Where we are</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Map</Link>
                </div>

                {/* Links Column 3 */}
                <div className="flex flex-col -ms-12 text-brand-sage gap-2 text-[14px] mt-10">
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Careers</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Contacts</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Privacy policy</Link>
                    <Link href="#" className="hover:text-brand-olive-dark transition-colors">Cookie Policy</Link>
                </div>

                {/* Socials & Instagram Column */}
                <div className="flex flex-col items-end gap-12 col-span-1 -ml-6 -mt-4">
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#5a6351] hover:text-white transition-colors shadow-sm">
                            <GrFacebookOption className="text-xl text-brand-sage" />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#5a6351] hover:text-white transition-colors shadow-sm"><TiSocialLinkedin className="text-2xl text-brand-sage" /></Link>
                    </div>
                    {/* Instagram Grid Placeholder */}
                    <div className="grid grid-cols-5 gap-2 -ms-24 mt-4">
                        <div className="-mt-16">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#5a6351] hover:text-white transition-colors shadow-sm">
                                <Image
                                    src="https://www.ilfalconiere.it/wp-content/uploads/inavii-social-feed/8879711608814206-s.jpg"
                                    alt="User avatar"
                                    width={30}
                                    height={30}
                                    priority
                                />
                            </Link>
                            <div className="w-16 h-16 bg-gray-300 mt-4"></div>
                        </div>
                        <div className="w-16 h-16 bg-gray-300 -mt-6"></div>
                        <div className="w-16 h-16 bg-gray-300 -mt-2"></div>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-[#4a5142] text-brand-cream font-serif py-6 text-xs/5 tracking-wide">
                <div className="max-w-350 mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-4">
                    <p >© 2026 Il Falconiere. All rights reserved. CIN: IT051017A1GB52NTSP <br /> P.IVA 01742090515 - REA AR 135931 - Capitale Sociale Versato 50.000</p>
                    <p className="text-left">l Falconiere Restaurant * 1 Michelin star ”Italia's Top Hotel - 3rd in Europe - 6th in the World”, Travel <br /> & Leisure 2007 - 2008 “400 The World Best Hotels”, Forbes Traveller</p>
                </div>
            </div>
        </footer>
    );
}