import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center bg-black text-white text-lg font-semibold">
            <p>
                All Rights Reserved by Aaron Chen&nbsp;|&nbsp;<Link href={`/`}>Credits</Link> &copy;
            </p>
        </footer>
    );
}
