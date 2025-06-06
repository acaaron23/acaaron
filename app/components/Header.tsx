import Nav from "@/app/components/Nav";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center h-15 bg-white">
            <Link href={`/`} className="p-2 m-2 text-black text-3xl font-bold hover:scale-[1.025]"> Aaron&#39;s Personal Portfolio </Link>
            <div className="flex items-center">
                <Nav />
            </div>
        </header>
    );
}