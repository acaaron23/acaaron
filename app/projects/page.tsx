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
                        <div className="flex flex-wrap gap-2 mt-2">
                            {[
                                "React",
                                "TailwindCSS",
                                "TypeScript",
                                "Shadcn",
                                "Firebase",
                                "Firestore",
                                "Figma"
                            ].map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-white/30 rounded-full text-sm text-black bg-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="list-disc list-inside mt-2 space-y-1">
                            Integrated randomized daily task generation with database functionality to provide motivation alternatives, reducing reliance on social media and devices to combat ‘brainrot’
                        </p>
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
                        <div className="flex flex-wrap gap-2 mt-2">
                            {["Next.js", "TailwindCSS", "TypeScript", "API Integration"].map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-white/30 rounded-full text-sm text-black bg-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-200 text-lg mt-2">
                            Developed a responsive phone validation website that integrates a third-party API for real-time phone number verification using asynchronous TypeScript logic.
                        </p>
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
                        <div className="flex flex-wrap gap-2 mt-2">
                            {["Next.js", "TailwindCSS", "TypeScript", "MongoDB", "Material UI"].map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-white/30 rounded-full text-sm text-black bg-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-200 text-lg mt-2">
                            Built a full-stack URL shortener with a clean interface and MongoDB-powered aliasing to allow users to create, customize, and manage unique short links with accurate redirection.
                        </p>
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
                        <div className="flex flex-wrap gap-2 mt-2">
                            {["Next.js", "TailwindCSS", "JSON", "Audio Player"].map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-white/30 rounded-full text-sm text-black bg-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-200 text-lg mt-2">
                            Created an interactive music website celebrating LeBron James, featuring a JSON-based song library, responsive audio playback, and theme switching for a fun and cross-device experience.
                        </p>
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
                        <div className="flex flex-wrap gap-2 mt-2">
                            {["HTML", "CSS", "JavaScript"].map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-white/30 rounded-full text-sm text-black bg-gray-300">
                {tech}
            </span>
                            ))}
                        </div>
                        <p className="text-gray-200 text-lg mt-2">
                            Built a restaurant discovery site for NYC that lets users explore curated dining options across all five boroughs with intuitive search and filtering features.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};