"use client";

import Typewriter from "@/app/components/Typewriter";

export default function Home() {
    return (
        <div className="flex flex-col h-screen items-center justify-center bg-black px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                Hi, I&apos;m Aaron
            </h1>
            <Typewriter />
        </div>
    );
}
