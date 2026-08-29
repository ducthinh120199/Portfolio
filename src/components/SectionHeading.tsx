type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
};

export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="relative mb-8 sm:mb-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-0 select-none font-display text-7xl font-semibold text-ink/[0.04] sm:-top-10 sm:text-9xl"
      >
        {index}
      </span>
      <span className="relative font-mono text-xs tracking-[0.08em] text-ember uppercase">
        {index} / {label}
      </span>
      <h2 className="relative mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h2>
      <span className="relative mt-4 block h-px w-full bg-line" aria-hidden="true" />
    </div>
  );
}
