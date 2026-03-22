import Image from "next/image";

export default function Partners() {
    return (
        <section className="bg-brand-cream py-16 border-t border-brand-olive-dark/10">
            <div className="max-w-300 mx-auto px-6">

                {/* Ornamental Divider */}
                <div className="flex items-center justify-center gap-2 mb-16 opacity-30">
                    <div className="w-16 h-px bg-brand-olive-dark"></div>
                    <div className="w-3 h-3 rounded-full border border-brand-olive-dark"></div>
                    <div className="w-16 h-px bg-brand-olive-dark"></div>
                </div>

                {/* Logos Grid (Placeholders) */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* You will replace these text placeholders with <Image /> tags containing their actual logos */}
                    <span className="font-serif text-xl">RELAIS & CHATEAUX</span>
                    <span className="font-serif text-xl">VIRTUOSO</span>
                    <span className="font-serif text-xl">MICHELIN 2026</span>
                    <span className="font-serif text-xl">AUTENTICO</span>
                    <span className="font-serif text-xl">WATERSTONE</span>
                </div>

                {/* Co-Funded Section */}
                <div className="mt-24 text-center">
                    <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-olive-dark/50 mb-8">Co-Funded By</h4>
                    <div className="flex justify-center items-center gap-8">
                        <span className="text-sm font-sans border p-2 border-brand-olive-dark/20">EU Regional Dev Fund Placeholder</span>
                    </div>
                </div>
            </div>
        </section>
    );
}