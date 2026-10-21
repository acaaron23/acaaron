import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
    title: "Employment",
};

const roles = [
    {
        company: "Travelers Insurance",
        title: "Software Engineering Intern",
        dates: "June 2026 – Present",
        logo: "/travelers.png",
        alt: "Travelers Logo",
        bullets: ["manufacturing umbrellas & drinking affogatos"],
    },
    {
        company: "AdaptX",
        title: "Software Engineering Intern",
        dates: "September 2025 – December 2025",
        logo: "/adaptx.png",
        alt: "AdaptX Logo",
        bullets: ["building something for athletes."],
    },
    {
        company: "Boston University Computer Science Club",
        title: "Computer Science Advisor",
        dates: "January 2025 – May 2026",
        logo: "/bucsc.png",
        alt: "Boston University CSC Logo",
        bullets: ["gave away pokemon cards and legos"],
    },
    {
        company: "Boston University Fitness and Recreational Center",
        title: "Facility Supervisor & Student Manager",
        dates: "December 2024 – May 2026",
        logo: "/fitrec.png",
        alt: "Boston University FitRec Logo",
        bullets: ["paid to lift weights and tell people to stop using tripods"],
    },
    {
        company: "New York City Economic Development Corporation — NYCEDC",
        title: "Management Information Systems – Web Development Intern",
        dates: "July 2025 – August 2025",
        logo: "/nycedc.png",
        alt: "NYCEDC Logo",
        bullets: ["learned about ferries"],
    },
    {
        company: "New York City Housing Authority — NYCHA",
        title: "Infrastructure & Operations Intern",
        dates: "July 2024 – August 2024",
        logo: "/nycha.png",
        alt: "NYCHA Logo",
        bullets: ["bob the builder"],
    },
    {
        company: "PYE Education Center",
        title: "STEM Project Development Intern",
        dates: "July 2023 – August 2023",
        logo: "/pye.png",
        alt: "PYE Education Logo",
        bullets: ["taught students about Python and C++"],
    },
];

export default function Employment() {
    return (
        <div className="page-shell">
            <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
                <PageHeader title="Employment" subtitle="Work experience" />

                <ol>
                    {roles.map((role, i) => (
                        <li key={role.company}>
                            {i > 0 && <div className="chrome-divider" aria-hidden />}
                            <div className="grid gap-5 py-10 md:grid-cols-[7rem_1fr] md:gap-10">
                            <div className="logo-tile h-20 w-20 p-3 md:h-24 md:w-24">
                                <Image
                                    src={role.logo}
                                    alt={role.alt}
                                    width={96}
                                    height={96}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <div>
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                                    <h2 className="text-xl font-medium text-fg md:text-2xl">
                                        {role.company}
                                    </h2>
                                    <time className="shrink-0 text-sm text-chrome tabular-nums">
                                        {role.dates}
                                    </time>
                                </div>
                                <p className="text-chrome-shine mt-1 font-[family-name:var(--font-instrument)] text-lg md:text-xl">
                                    {role.title}
                                </p>
                                <ul className="mt-4 space-y-1.5 text-base text-muted">
                                    {role.bullets.map((bullet) => (
                                        <li key={bullet} className="flex gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" aria-hidden />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
