import Link from "next/link";

export default function Nav() {
    const linkStyle = "p-4 font-bold text-white text-2xl hover:scale-[1.05] inline-block";
    return (
        <nav className="p-2">
            <Link href={`/`} className={linkStyle}>Home</Link>
            <Link href={`/education`} className={linkStyle}>Education</Link>
            <Link href={'/employment'} className={linkStyle}>Employment</Link>
            <Link href={'/projects'} className={linkStyle}>Projects</Link>
        </nav>
    )
}