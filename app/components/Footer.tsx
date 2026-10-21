export default function Footer() {
    return (
        <footer className="mt-auto w-full bg-bg">
            <div className="chrome-divider" aria-hidden />
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
                <p className="text-sm text-chrome/70">
                    © {new Date().getFullYear()} Aaron Chen
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-chrome" aria-hidden />
            </div>
        </footer>
    );
}
