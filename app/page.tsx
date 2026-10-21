"use client";

import Typewriter from "@/app/components/Typewriter";
import { motion } from "motion/react";

export default function Home() {
    return (
        <div className="page-shell overflow-hidden">
            <div className="flex flex-1 flex-col items-center justify-center px-5 py-8 text-center">
                <div className="flex w-full max-w-6xl flex-col items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-[family-name:var(--font-instrument)] tracking-tight text-fg"
                    >
                        <span className="block text-xl text-chrome sm:text-2xl md:text-3xl">
                            Hi, I&apos;m
                        </span>
                        <span className="text-chrome-burgundy-shine mt-2 block pb-2 text-7xl leading-[0.92] sm:text-8xl md:text-9xl lg:text-[11rem]">
                            Aaron
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.28 }}
                        className="mt-10 flex w-full justify-center"
                    >
                        <Typewriter />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
