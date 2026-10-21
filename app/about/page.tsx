import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
    title: "About",
};

const socials = [
    {
        href: "https://www.linkedin.com/in/acaaron/",
        label: "LinkedIn",
        logo: "/linkedin.png",
    },
    {
        href: "https://github.com/acaaron23",
        label: "GitHub",
        logo: "/github.png",
    },
];

export default function About() {
    return (
        <div className="page-shell">
            <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
                <PageHeader title="About Me" />

                <section className="grid items-center gap-10 md:grid-cols-[18rem_1fr] md:gap-14">
                    <div className="relative mx-auto h-64 w-64 md:h-72 md:w-72">
                        <div
                            className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-chrome via-accent to-accent-bright opacity-80"
                            aria-hidden
                        />
                        <Image
                            src="/ac_pfp.jpeg"
                            alt="Aaron Chen"
                            width={288}
                            height={288}
                            className="relative h-full w-full rounded-full border-4 border-bg object-cover"
                        />
                    </div>

                    <p className="text-xl leading-relaxed text-fg md:text-2xl">
                        Hey! I&apos;m Aaron, a Software Engineer at Travelers Insurance. I&apos;m excited to have you here to learn more about me!
                    </p>
                </section>

                <div className="chrome-divider my-16" aria-hidden />

                <section>
                    <h2 className="text-chrome-shine font-[family-name:var(--font-instrument)] text-3xl md:text-4xl">
                        Let&apos;s Connect
                    </h2>
                    <div className="accent-rule mt-3" aria-hidden />

                    <div className="mt-8 flex flex-wrap gap-4">
                        {socials.map(({ href, label, logo }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-xl border border-chrome/25 bg-chrome/5 py-3 pr-6 pl-3 transition-colors hover:border-chrome/50 hover:bg-chrome/10"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2">
                                    <Image src={logo} alt="" width={40} height={40} className="object-contain" />
                                </span>
                                <span className="text-lg text-fg group-hover:text-white">{label}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
