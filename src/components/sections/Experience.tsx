import { experience } from '../../data/experience';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import TechChip from '../ui/TechChip';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <SectionHeading
          index="01"
          title="Experience"
          subtitle="Four years across product and service companies — always closest to the backend."
        />
      </Reveal>

      <div className="relative ml-2 border-l border-zinc-200 dark:border-white/10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-teal-600 ring-4 ring-zinc-50 dark:bg-teal-400 dark:ring-[#0a0f16]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {job.role} <span className="text-teal-600 dark:text-teal-400">@ {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{job.period}</p>
            </div>
            <p className="mt-1 text-sm text-zinc-500 italic dark:text-zinc-500">{job.blurb}</p>
            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 text-teal-600 dark:text-teal-400">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <TechChip key={tech} label={tech} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
