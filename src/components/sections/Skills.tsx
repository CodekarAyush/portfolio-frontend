import { skillGroups } from '../../data/skills';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import TechChip from '../ui/TechChip';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <SectionHeading
          index="03"
          title="Skills"
          subtitle="Backend-heavy by choice — with AI/LLM integration as a first-class part of the stack."
        />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 4) * 70} className="h-full">
            <div className="h-full rounded-xl border border-zinc-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/3">
              <h3 className="font-mono text-sm font-semibold text-teal-600 dark:text-teal-400">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechChip key={item} label={item} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
