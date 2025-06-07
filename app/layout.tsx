import Header from "@/app/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Home | Aaron's Portfolio",
        template: "%s | Aaron's Portfolio",
    },
    description: "Aaron's Portfolio",
};



export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;}>) {
    return (
        <html lang = "en">
            <body className={`${geistSans.variable} ${geistMono.variable} h-full flex flex-col antialiased bg-white`}>
                    <Header />
                    {children}
                    <Footer />
            </body>
        </html>
    );
}