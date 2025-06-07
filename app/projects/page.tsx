import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Projects(){
    return(
        <div className="w-full h-full p-10 min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
            <div className="w-full max-w-5xl bg-white/5 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
                <div className="text-center">
                    <h2 className="text-5xl font-bold pb-5">Projects</h2>
                </div>
                <div className="space-y-10 text-lg text-gray-200">
                    {/* BobaAddict */}
                    <div>
                        <h3 className="text-3xl font-semibold">BobaAddict</h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Introduced a gamified approach through an engaging and dynamic interface to track boba consumption, transforming indulgent purchases into an insightful and enjoyable financial management tool</li>
                        </ul>
                    </div>

                    {/* RotReset */}
                    <div>
                        <h3 className="text-3xl font-semibold">
                            <a
                                href="https://rotreset.tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-red-300 transition"
                            >
                                RotReset
                            </a>
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Designed an application with TailwindCSS, React, Shadcn, TypeScript, Firebase, Firestore, and Figma</li>
                            <li>Integrated randomized daily task generation with database functionality to provide motivation alternatives, reducing reliance on social media and devices to combat ‘brainrot’</li>
                        </ul>
                    </div>

                    {/* Number Validator */}
                    <div>
                        <h3 className="text-3xl font-semibold">
                            <a
                                href="https://numbervalidator-two.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-red-300 transition"
                            >
                                Number Validator
                            </a>
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200 text-lg">
                            <li>Developed a responsive phone validation website using Next.js, TypeScript, and TailwindCSS</li>
                            <li>Integrated a third-party API to validate phone numbers in real-time with robust async TypeScript logic</li>
                        </ul>
                    </div>

                    {/* URL Shortener */}
                    <div>
                        <h3 className="text-3xl font-semibold">
                            <a
                                href="https://url-shortener-ac.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-red-300 transition"
                            >
                                URL Shortener
                            </a>
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200 text-lg">
                            <li>Built a full-stack URL shortener with Next.js, TypeScript, TailwindCSS, MongoDB, and Material UI for generating and managing shareable custom links</li>
                            <li>Implemented a MongoDB-based aliasing system to ensure uniqueness and prevent link duplication, preserving accurate redirection logic</li>
                        </ul>
                    </div>

                    {/* LeBronify */}
                    <div>
                        <h3 className="text-3xl font-semibold">
                            <a
                                href="https://lebronify-two.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-red-300 transition"
                            >
                                LeBronify
                            </a>
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200 text-lg">
                            <li>Developed a themed music web app using Next.js and TailwindCSS with a JSON dataset featuring songs dedicated to the GOAT, LeBron James</li>
                            <li>Implemented a responsive audio player with theme switching and cross-device compatibility for an interactive user experience</li>
                        </ul>
                    </div>


                    {/* Knot */}
                    <div>
                        <h3 className="text-3xl font-semibold">
                            <a
                                href="https://nycknot.glitch.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-red-300 transition"
                            >
                                knot
                            </a>
                        </h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Designed and developed a dynamic website using HTML, CSS, and JavaScript that connects NYC customers with new restaurants across all five boroughs</li>
                            <li>Implemented search and filtering features to help users explore curated restaurant lists based on preferences</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};