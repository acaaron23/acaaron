import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
    title: "Projects",
};

const projects = [
    {
        name: "BobaAddict",
        href: "https://bobaaddict.vercel.app/",
        tech: ["Next.js", "TailwindCSS", "TypeScript", "MongoDB", "Google OAuth"],
        description:
            "Introduced a gamified approach through an engaging and dynamic interface to track boba consumption, transforming indulgent purchases into an insightful and enjoyable financial management tool",
    },
    {
        name: "RotReset",
        href: "https://rotreset.tech/",
        tech: ["React", "TailwindCSS", "TypeScript", "Shadcn", "Firebase", "Firestore", "Figma"],
        description:
            "Integrated randomized daily task generation with database functionality to provide motivation alternatives, reducing reliance on social media and devices to combat ‘brainrot’",
    },
    {
        name: "URL Shortener",
        href: "https://url-shortener-ac.vercel.app/",
        tech: ["Next.js", "TailwindCSS", "TypeScript", "MongoDB", "Material UI"],
        description:
            "Built a full-stack URL shortener with a clean interface and MongoDB-powered aliasing to allow users to create, customize, and manage unique short links with accurate redirection",
    },
    {
        name: "Number Validator",
        href: "https://numbervalidator-two.vercel.app/",
        tech: ["Next.js", "TailwindCSS", "TypeScript", "API Integration"],
        description:
            "Developed a responsive phone validation website that integrates a third-party API for real-time phone number verification using asynchronous TypeScript logic",
    },
    {
        name: "LeBronify",
        href: "https://lebronify-two.vercel.app/",
        tech: ["Next.js", "TailwindCSS", "JSON", "Audio Player"],
        description:
            "Created an interactive music website celebrating LeBron James, featuring a JSON-based song library, responsive audio playback, and theme switching for a fun and cross-device experience",
    },
    {
        name: "knot",
        href: "https://nycknot.glitch.me/",
        tech: ["HTML", "CSS", "JavaScript"],
        description:
            "Built a restaurant discovery site for NYC that lets users explore curated dining options across all five boroughs with intuitive search and filtering features",
    },
];

export default function Projects() {
    return (
        <div className="page-shell">
            <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
                <PageHeader title="Projects" />

                <ul>
                    {projects.map((project, i) => (
                        <li key={project.name}>
                            {i > 0 && <div className="chrome-divider" aria-hidden />}
                            <div className="py-10">
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2"
                                >
                                    <h2 className="text-chrome-shine font-[family-name:var(--font-instrument)] text-3xl md:text-4xl">
                                        {project.name}
                                    </h2>
                                    <ArrowUpRight
                                        size={22}
                                        className="text-chrome transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden
                                    />
                                </a>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="chip">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                                    {project.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
