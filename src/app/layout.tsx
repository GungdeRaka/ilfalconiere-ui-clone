import type { Metadata } from "next";
import { Quattrocento, Quattrocento_Sans } from "next/font/google";
import "./globals.css";

// Configure Quattrocento (Serif) for headings
const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattrocento",
  display: "swap",
});

// Configure Quattrocento Sans for body text
const quattrocentoSans = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattrocento-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Il Falconiere | Luxury Resort in Tuscany",
  description: "A luxury wine resort and Michelin star restaurant in Cortona, Tuscany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quattrocento.variable} ${quattrocentoSans.variable}`}>
      {/* Updated text color to our new dark olive variable */}
      <body className="font-sans antialiased bg-brand-cream text-brand-olive-dark">
        {children}
      </body>
    </html>
  );
}