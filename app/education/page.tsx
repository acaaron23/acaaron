import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
    title: "Education",
};

const coursework = [
    "CS528 - Cloud Computing",
    "CS519 - Spark! Software Engineering X-Lab",
    "CS460 - Introduction to Databases",
    "CS440 - Introduction to AI",
    "CS411 - Software Engineering",
    "CS391 - Web Application Development",
    "CS351 - Distributed Systems",
    "CS330 - Analysis of Algorithms",
    "CS320 - Programming Languages",
    "CS237 - Probability in Computing",
    "CS210 - Computer Systems",
    "CS132 - Geometric Algorithms",
    "CS131 - Combinatoric Structures",
    "CS112 - Introduction to Java",
];

const awards = ["College of Arts and Science Dean's List Spring 2025"];

export default function Education() {
    return (
        <div className="page-shell">
            <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
                <PageHeader title="Education" />

                <section className="grid items-center gap-6 md:grid-cols-[7rem_1fr] md:gap-10">
                    <div className="logo-tile h-24 w-24 p-3 md:h-28 md:w-28">
                        <Image
                            src="/BU.png"
                            alt="Boston University"
                            width={112}
                            height={112}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium text-fg md:text-3xl">Boston University</h2>
                        <p className="text-chrome-shine mt-1 font-[family-name:var(--font-instrument)] text-xl md:text-2xl">
                            Bachelor of Arts in Computer Science
                        </p>
                        <p className="mt-1 text-sm text-chrome">Boston, MA</p>
                    </div>
                </section>

                <div className="chrome-divider my-12" aria-hidden />

                <section>
                    <h3 className="text-chrome-shine font-[family-name:var(--font-instrument)] text-2xl md:text-3xl">
                        Relevant Coursework
                    </h3>
                    <div className="accent-rule mt-3" aria-hidden />
                    <div className="mt-6 flex flex-wrap gap-2.5">
                        {coursework.map((course) => (
                            <span key={course} className="chip">
                                {course}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="chrome-divider my-12" aria-hidden />

                <section>
                    <h3 className="text-chrome-shine font-[family-name:var(--font-instrument)] text-2xl md:text-3xl">
                        Awards
                    </h3>
                    <div className="accent-rule mt-3" aria-hidden />
                    <div className="mt-6 flex flex-wrap gap-2.5">
                        {awards.map((award) => (
                            <span key={award} className="chip">
                                {award}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
