"use client";

import Typewriter from "@/app/components/Typewriter";

export default function Home() {
    return (
        <div className="flex flex-col h-full items-center justify-center bg-black">
            <h1 className="text-7xl font-bold mb-4">Hi, I&#39;m Aaron</h1>
            <Typewriter/>
        </div>
    );
}