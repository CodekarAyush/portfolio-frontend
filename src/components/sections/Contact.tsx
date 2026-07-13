import { profile } from '../../data/profile';
import Reveal from '../ui/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-sm text-teal-600 dark:text-teal-400">05 · what&apos;s next</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let&apos;s build something
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            Whether it&apos;s a distributed backend, an LLM/RAG integration, or a full SaaS product
            that needs to ship — my inbox is open.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
            >
              Say hello
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-teal-600 hover:text-teal-600 dark:border-white/15 dark:text-zinc-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-teal-600 hover:text-teal-600 dark:border-white/15 dark:text-zinc-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-6 font-mono text-xs text-zinc-500 dark:text-zinc-500">
            {profile.email} · {profile.phone}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
