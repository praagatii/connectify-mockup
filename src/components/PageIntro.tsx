export default function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-white/10 px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-inter text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}