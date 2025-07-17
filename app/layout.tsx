import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight:["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "Quarson",
  description: "Ev ve iş yerleri için yüksek kaliteli mermer döşeme çözümleri. Mekânınıza özel şık, dayanıklı ve zamansız tasarımları keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
