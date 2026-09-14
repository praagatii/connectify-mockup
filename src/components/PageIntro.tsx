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
    <header className="relative overflow-hidden border-b border-black/10 bg-white px-6 pb-16 pt-36 lg:pb-24 lg:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50rem 34rem at 12% 0%, rgba(82,40,185,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2.5 font-inter text-xs font-medium uppercase tracking-[0.25em] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              {eyebrow}
            </p>
            <h1 className="mt-8 font-inter text-5xl font-extrabold leading-[1.02] tracking-tight text-black sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>
          {description ? (
            <div className="lg:col-span-4 lg:col-start-10">
              <p className="max-w-md text-base leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}