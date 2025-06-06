import React, { useEffect, useState } from "react";

const phrases = [
    "a CS student at Boston University",
    "a passionate coder",
    "a striving software engineer",
    "a lifelong learner",
    "a matcha lover",
    "a bug's best friend",
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
                const nextIndex = Math.floor(Math.random() * phrases.length);
                setPhraseIndex(nextIndex);
                setDeleting(false);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, phraseIndex]);

    return (
        <div className="flex justify-center items-center font-mono text-2xl">
            <p className="animate-blink pr-4 text-green-500"> {'>'} </p>
            <p>{displayedText}</p>
            <p className="animate-blink font-xl text-green-500 ml-1">|</p>
        </div>
    );
}

export default Typewriter;
