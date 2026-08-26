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
    <header className="border-b border-black/10 px-6 pb-20 pt-36">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
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