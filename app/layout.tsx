import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: {
        default: "Home | Aaron",
        template: "%s | Aaron",
    },
    description: "Aaron Chen — CS student at Boston University",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} flex min-h-full flex-col antialiased bg-bg text-fg font-sans`}
            >
                <Header />
                <main className="flex min-h-0 w-full flex-1 flex-col">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
