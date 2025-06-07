"use client";

import { useState } from "react";
import Nav from "@/app/components/Nav";
import Link from "next/link";
import { Menu, X } from "lucide-react"; //

export default function Header() {
    const [hamburger, setHamburger] = useState(false);

    return (
        <header className="w-full bg-black px-4 py-3">
            <div className="flex justify-between items-center">
                <Link
                    href={`/`}
                    className="text-white text-2xl font-bold hover:scale-[1.025]"
                >
                    Aaron&#39;s Portfolio
                </Link>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setHamburger(!hamburger)}
                    className="text-white sm:hidden focus:outline-none"
                >
                    {hamburger ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Nav on medium and larger */}
                <div className="hidden sm:flex">
                    <Nav />
                </div>
            </div>

            {/* Dropdown Menu on small screens */}
            {hamburger && (
                <div className="sm:hidden mt-3 border-t border-white/20 pt-3">
                    <Nav />
                </div>
            )}
        </header>
    );
}
