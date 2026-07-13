import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 text-center">
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
          Designed & built by {profile.name} · React · TypeScript · Tailwind · three.js
        </p>
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
