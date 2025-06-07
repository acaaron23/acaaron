import Nav from "@/app/components/Nav";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center h-15 bg-black ">
            <Link href={`/`} className="p-2 m-2 text-white text-2xl font-bold hover:scale-[1.025]"> Aaron&#39;s Portfolio </Link>
            <div className="flex items-center">
                <Nav />
            </div>
        </header>
    );
}