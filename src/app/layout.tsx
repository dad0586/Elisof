import type { Metadata } from "next";
import { Geist, Geist_Mono, Federo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import 'flowbite';
import 'flowbite-react';
import 'tailwindcss/tailwind.css';
import Footer from "@/components/footer/footer";
// import "flowbite/dist/flowbite.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const federo = Federo({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>

    
  );
}
