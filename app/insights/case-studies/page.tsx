const caseStudies = [
  {
    title: "Global retail group",
    summary: "Modernized commerce stack across 22 markets with 18% uplift in conversion.",
    highlights: ["Composable architecture", "Personalization engine", "24-week rollout"],
  },
  {
    title: "Healthcare network",
    summary: "AI triage assistant reduced average handle time by 32% and improved CSAT.",
    highlights: ["LLM copilots", "HIPAA-compliant cloud", "CX playbooks"],
  },
  {
    title: "Logistics provider",
    summary: "Control tower delivered real-time ETA accuracy with 40% fewer escalations.",
    highlights: ["IoT ingestion", "Predictive analytics", "Managed command center"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="rounded-3xl border border-white/10 bg-[color:var(--primary-dark)] px-6 py-16 text-white shadow-2xl sm:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--lime)]">
            Case Studies
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Proven outcomes across industries and programs
          </h1>
          <p className="text-lg text-white/80">
            Explore how MayfairTech.ai helps enterprises modernize their technology estate while delivering
            measurable value.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 px-6 py-12 text-[color:var(--foreground)] shadow-xl backdrop-blur sm:px-12">
        {caseStudies.map((study) => (
          <article key={study.title} className="rounded-2xl border border-white/10 bg-[color:var(--primary-dark)]/[0.35] p-6">
            <h2 className="text-2xl font-semibold">{study.title}</h2>
            <p className="mt-2 text-base text-[color:var(--slate)]">{study.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-[color:var(--foreground)]">
              {study.highlights.map((highlight) => (
                <li key={highlight} className="rounded-full border border-white/10 px-3 py-1">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

