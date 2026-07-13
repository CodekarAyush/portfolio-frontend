import { profile } from '../../data/profile';
import { useTypewriter } from '../../hooks/useTypewriter';
import Reveal from '../ui/Reveal';

const terminalLines = [
  { text: '$ node dist/main.js', cls: 'text-zinc-500 dark:text-zinc-500' },
  { text: '[Nest]  RAG pipeline initialised', cls: 'text-emerald-600 dark:text-emerald-400' },
  { text: '✓ kafka consumer connected · topic: github.events', cls: '' },
  { text: '✓ redis cache warm · 12ms', cls: '' },
  { text: '✓ vector store loaded · 48k embeddings', cls: '' },
  { text: '→ POST /api/v1/assistant/query · 200 · 138ms', cls: 'text-sky-600 dark:text-sky-400' },
  { text: '"how does auth handle refresh rotation?"', cls: 'text-zinc-500 dark:text-zinc-500' },
  { text: '↳ retrieved 6 chunks · grounded answer served', cls: 'text-teal-600 dark:text-teal-400' },
];

const stats = [
  { value: '4', label: 'years experience' },
  { value: '100+', label: 'REST APIs shipped' },
  { value: '50+', label: 'products built & shipped' },
];

export default function Hero() {
  const typed = useTypewriter(profile.taglines);

  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-5xl items-center px-5 pt-14">
      <div className="grid w-full items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <p className="font-mono text-sm text-teal-600 dark:text-teal-400">
              hi, my name is
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-zinc-700 dark:text-zinc-300">
              {profile.role}
            </p>
            <p className="caret mt-2 h-7 font-mono text-sm text-zinc-500 dark:text-zinc-400">
              {typed}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
              >
                View my work
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-teal-600 hover:text-teal-600 dark:border-white/15 dark:text-zinc-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
              >
                Resume
              </a>
              <div className="ml-1 flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-500 transition-colors hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.68 5.38-5.24 5.67.41.35.77 1.05.77 2.12v3.15c0 .31.2.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
                  </svg>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-500 transition-colors hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-10 flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {s.value}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="hidden lg:block">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/3">
            <div className="flex items-center gap-1.5 border-b border-zinc-200 px-4 py-3 dark:border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                rag-assistant — production
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {terminalLines.map((line, i) => (
                <p
                  key={line.text}
                  className={`reveal is-visible ${line.cls}`}
                  style={{ transitionDelay: `${400 + i * 180}ms` }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
