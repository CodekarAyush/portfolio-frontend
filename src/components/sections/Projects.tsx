import { projects, type Project } from '../../data/projects';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import TechChip from '../ui/TechChip';

const accentDot: Record<string, string> = {
  violet: 'bg-violet-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  indigo: 'bg-indigo-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  green: 'bg-emerald-500',
  blue: 'bg-sky-500',
  rose: 'bg-rose-500',
};

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-md dark:border-white/10 dark:bg-white/3 dark:hover:border-teal-400/40">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-500">
            <span className={`h-1.5 w-1.5 rounded-full ${accentDot[project.accent]}`} />
            {project.kind}
          </p>
          <div className="flex items-center gap-2">
            {project.ai && (
              <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-2 py-0.5 font-mono text-[10px] text-violet-600 dark:text-violet-300">
                LLM / RAG
              </span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                className="text-zinc-400 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-3 flex-1 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <span className="mt-0.5 text-teal-600 dark:text-teal-400">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <SectionHeading
          index="02"
          title="Projects"
          subtitle="AI platforms, SaaS products and live e-commerce sites — designed, built and deployed end-to-end, including the servers they run on."
        />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={(i % 2) * 100} />
        ))}
      </div>
    </section>
  );
}
