"use client";

import Typewriter from "@/app/components/Typewriter";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to h-200">
            <h1 className="text-7xl font-bold mb-4">Hi, I&#39;m Aaron</h1>
            <Typewriter/>
        </div>
    );
}