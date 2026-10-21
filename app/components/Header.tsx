"use client";

import { useState } from "react";
import Nav from "@/app/components/Nav";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
                <Link
                    href="/"
                    className="text-chrome-shine font-[family-name:var(--font-instrument)] text-2xl tracking-tight transition-opacity hover:opacity-80"
                >
                    Aaron
                </Link>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="text-chrome sm:hidden focus:outline-none"
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="hidden sm:flex">
                    <Nav />
                </div>
            </div>

            {open && (
                <div className="border-t border-line px-5 py-3 sm:hidden">
                    <Nav onNavigate={() => setOpen(false)} />
                </div>
            )}
            <div className="chrome-divider" aria-hidden />
        </header>
    );
}
