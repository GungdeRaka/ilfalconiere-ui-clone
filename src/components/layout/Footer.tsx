import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-cream text-brand-olive-dark pt-16 font-sans">

            {/* Top Main Footer Area */}
            <div className="max-w-350 mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8 pb-16">

                {/* Contact Column */}
                <div className="flex flex-col gap-2 text-[14px] leading-relaxed col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                        {/* Simple present icon placeholder */}
                        <span className="text-2xl">🎁</span>
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
                <div className="flex flex-col gap-3 text-[14px] mt-10">
                    <Link href="#" className="hover:text-brand-sage transition-colors">The Baracchi Family</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Values and sustainability</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Services</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Bottega Baracchi</Link>
                </div>

                {/* Links Column 2 */}
                <div className="flex flex-col gap-3 text-[14px] mt-10">
                    <Link href="#" className="hover:text-brand-sage transition-colors">Cortona</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Distances</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Where we are</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Map</Link>
                </div>

                {/* Links Column 3 */}
                <div className="flex flex-col gap-3 text-[14px] mt-10">
                    <Link href="#" className="hover:text-brand-sage transition-colors">Careers</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Contacts</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Privacy policy</Link>
                    <Link href="#" className="hover:text-brand-sage transition-colors">Cookie Policy</Link>
                </div>

                {/* Socials & Instagram Column */}
                <div className="flex flex-col items-end gap-6 col-span-1 mt-10">
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#5a6351] hover:text-white transition-colors shadow-sm">f</Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#5a6351] hover:text-white transition-colors shadow-sm">in</Link>
                    </div>
                    {/* Instagram Grid Placeholder */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="w-16 h-16 bg-gray-300"></div>
                        <div className="w-16 h-16 bg-gray-300"></div>
                        <div className="w-16 h-16 bg-gray-300"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-[#4a5142] text-[#d4d6d2] py-6 text-[11px] tracking-wide">
                <div className="max-w-350 mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-4">
                    <p>© 2026 Il Falconiere. All rights reserved. CIN: IT051017... <br /> P.IVA 01/42090... - REA AR... - Capitale Sociale...</p>
                    <p className="text-right">Il Falconiere Restaurant * 1 Michelin star "Italia's Top Hotel..." <br /> Travel & Leisure 2007 - 2008...</p>
                </div>
            </div>
        </footer>
    );
}