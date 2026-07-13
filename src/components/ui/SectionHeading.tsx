interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-teal-600 dark:text-teal-400">{index}</p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
    </div>
  );
}
