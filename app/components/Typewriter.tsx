"use client";

import React, { useEffect, useState } from "react";

const phrases = [
    "a CS student from Boston University",
    "a bug's best friend",
    "Claude is my best friend",
    "AI's emotional support human",
    "refuses to read the documentation (but should)",
    "loves yerba mate and merge conflicts",
    "rubber duck debugging champion",
    "has 4 rubber ducks on my desk watching me code",
    "knicks bandwagoner"
];

function Typewriter() {
    const [displayedText, setDisplayedText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let timeout: NodeJS.Timeout;

        if (!deleting) {
            if (charIndex <= currentPhrase.length) {
                setDisplayedText(currentPhrase.slice(0, charIndex));
                timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
            } else {
                timeout = setTimeout(() => setDeleting(true), 1000);
            }
        } else {
            if (charIndex >= 0) {
                setDisplayedText(currentPhrase.slice(0, charIndex));
                timeout = setTimeout(() => setCharIndex(charIndex - 1), 100);
            } else {
                timeout = setTimeout(() => {
                    const nextIndex = Math.floor(Math.random() * phrases.length);
                    setPhraseIndex(nextIndex);
                    setDeleting(false);
                    setCharIndex(0);
                }, 100);
            }
        }
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, phraseIndex]);

    return (
        <div className="flex w-full justify-center overflow-x-auto">
            <p className="inline-flex max-w-none items-center whitespace-nowrap font-mono text-[1.2rem] leading-none text-fg sm:text-2xl md:text-[1.8rem] lg:text-[2.4rem]">
                <span className="mr-3 shrink-0 text-chrome select-none" aria-hidden>
                    {">"}
                </span>
                <span>{displayedText}</span>
                <span
                    className="animate-blink ml-1.5 inline-block h-[0.85em] w-[0.1em] shrink-0 translate-y-[0.02em] bg-chrome"
                    aria-hidden
                />
            </p>
        </div>
    );
}

export default Typewriter;
