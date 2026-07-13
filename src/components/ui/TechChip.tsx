interface TechChipProps {
  label: string;
}

export default function TechChip({ label }: TechChipProps) {
  return (
    <span className="rounded-md border border-zinc-200 bg-zinc-100/60 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
      {label}
    </span>
  );
}
