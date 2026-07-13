import { profile } from '../../data/profile';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <SectionHeading
          index="04"
          title="Resume"
          subtitle="Preview it right here, or grab a copy."
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-5 flex flex-wrap gap-3">
          <a
            href={profile.resumeUrl}
            download="Ayush_Kumar_Gautam_Resume.pdf"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
          >
            Download PDF
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-teal-600 hover:text-teal-600 dark:border-white/15 dark:text-zinc-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            Open in new tab
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-white/10">
          <object
            data={profile.resumeUrl}
            type="application/pdf"
            className="h-[75vh] min-h-[480px] w-full"
            aria-label="Resume preview"
          >
            <div className="flex h-[40vh] items-center justify-center p-8 text-center text-sm text-zinc-500">
              <p>
                PDF preview isn&apos;t supported in this browser —{' '}
                <a href={profile.resumeUrl} className="text-teal-600 underline dark:text-teal-400">
                  open the resume directly
                </a>
                .
              </p>
            </div>
          </object>
        </div>
      </Reveal>
    </section>
  );
}
