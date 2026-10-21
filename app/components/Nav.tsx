"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/employment", label: "Employment" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
];

export default function Nav({ onNavigate }: { onNavigate?: () => void }) {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
            {links.map(({ href, label }) => {
                const active =
                    href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(href);

                return (
                    <Link
                        key={href}
                        href={href}
                        onClick={onNavigate}
                        className={`relative px-3 py-2 text-sm tracking-wide transition-colors ${
                            active
                                ? "text-white"
                                : "text-chrome/70 hover:text-white"
                        }`}
                    >
                        {label}
                        {active && (
                            <span
                                className="absolute left-3 right-3 -bottom-0.5 h-px bg-chrome"
                                aria-hidden
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}
