export default function PageHeader({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <header className="mb-14 max-w-2xl">
            <h1 className="text-chrome-shine font-[family-name:var(--font-instrument)] text-5xl tracking-tight md:text-6xl">
                {title}
            </h1>
            <div className="accent-rule mt-4" aria-hidden />
            {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
        </header>
    );
}
