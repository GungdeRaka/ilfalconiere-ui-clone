import Image from "next/image";
import { SiEuropeanunion } from "react-icons/si";

export default function Partners() {
    return (
        <section className="bg-brand-cream py-20 border-t border-brand-olive-dark/10">
            <div className="max-w-300 mx-auto px-6">

                {/* Divider */}
                <div className="w-56 mx-auto mb-16 opacity-30">
                    <svg viewBox="0 0 95 6" className="w-full">
                        <path d="M38.5 2.7h-36c-.1-.6-.6-1-1.2-1C.6 1.7 0 2.3 0 3c0 .7.6 1.3 1.3 1.3.6 0 1.1-.4 1.2-1h35.9c.2 0 .3-.1.3-.3s-.1-.3-.2-.3zm-37.2 1C.9 3.7.6 3.4.6 3c0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM54.4 1.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8S56.2 4 56.2 3s-.8-1.8-1.8-1.8zm0 3.1c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zM40.9 1.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8S42.7 4 42.7 3s-.7-1.8-1.8-1.8zm0 3.1c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zM47.7 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.4-3-3-3zm0 5.4c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM93.7 1.7c-.6 0-1.1.4-1.2 1H57.1c-.2 0-.3.1-.3.3s.1.3.3.3h35.3c.1.6.6 1 1.2 1 .8 0 1.4-.6 1.4-1.3 0-.7-.6-1.3-1.3-1.3zm0 2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z" />
                    </svg>
                </div>

                {/* ===== ROW 1 ===== */}
                <div className="flex flex-wrap lg:flex-row justify-center items-center gap-x-12 gap-y-10 mb-16 opacity-70 grayscale">

                    <Logo src="relais" w={80} h={90} />
                    <Logo src="virtuoso" w={140} h={70} />
                    <Logo src="autentico" w={140} h={40} />
                    <Logo src="affluent" w={140} h={50} />
                    <Logo src="celebrated" w={140} h={60} />
                    <Logo src="lesoste" w={60} h={60} />
                    <Logo src="serendipians" w={100} h={100} />

                </div>

                {/* ===== ROW 2 ===== */}
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-70 grayscale">

                    <Logo src="michelin" w={100} h={70} />
                    <Logo src="internove" w={140} h={50} />
                    <Logo src="hrz" w={90} h={70} />
                    <Logo src="waterstone" w={120} h={50} />
                    <Logo src="eurotoques" w={110} h={60} />
                    <Logo src="porcreo" w={90} h={60} />

                </div>

                {/* ===== CO FUNDED ===== */}
                <div className="mt-24 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase text-brand-olive-dark/50 mb-8">
                        Co-Funded By
                    </p>

                    <div className="flex justify-center items-center gap-14">
                        <div className="flex flex-wrap justify-start gap-2 items-center">

                            <div className="flex justify-center items-center border-2 w-14 h-10  border-brand-sage">
                                <SiEuropeanunion className="m-auto text-3xl mt-auto font-black text-brand-olive-dark" />
                            </div>
                            {/* text */}
                            <div className="flex flex-col items-start justify-center text-left text-brand-olive-dark font-sans font-normal  ">
                                <p className="text-xs/0 leading-tight">EUROPEAN UNION - REGIONE TOSCANA
                                    <br />PR FESR 2021-2027 - SOSTEGNO ALLE PMI</p>
                                <p className="text-xs">Bando Internazionalizzazione 2023</p>
                            </div>
                        </div>
                        <Logo src="coesione-italia" w={90} h={20} />
                    </div>
                </div>

            </div>
        </section>
    );
}


/* ===== Reusable Logo Component ===== */
interface LogoProps {
    src: string;
    w: number;
    h: number;
}
function Logo({ src, w, h, }: LogoProps) {
    return (
        <div
            className="flex items-center justify-center"
            style={{ width: w, height: h }}
        >
            <Image
                src={`/logos/${src}.png`}
                alt={`${src}'s logo`}
                width={w}
                height={h}
                className="object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
        </div>
    );
}