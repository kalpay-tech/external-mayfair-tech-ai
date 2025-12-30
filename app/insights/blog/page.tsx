const posts = [
  {
    title: "Designing responsible AI copilots",
    summary: "Principles for deploying explainable LLM assistants inside enterprise workflows.",
    tag: "AI Strategy",
  },
  {
    title: "Building composable commerce foundations",
    summary: "How to transition from monoliths to MACH architecture without disruption.",
    tag: "E-Business",
  },
  {
    title: "Command centers for supply chain resilience",
    summary: "What to monitor, automate, and escalate across distributed logistics networks.",
    tag: "Logistics",
  },
];

export default function InsightsBlogPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="rounded-3xl border border-white/10 bg-[color:var(--primary-dark)] px-6 py-16 text-white shadow-2xl sm:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--lime)]">
            Blog
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Thought leadership from our teams</h1>
          <p className="text-lg text-white/80">
            Insights on AI, engineering, and operations from MayfairTech.ai strategists, designers, and
            technologists.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 px-6 py-12 text-[color:var(--foreground)] shadow-xl backdrop-blur sm:px-12">
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-white/10 bg-[color:var(--primary-dark)]/[0.35] p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--forest-green)]">
                {post.tag}
              </span>
              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-base text-[color:var(--slate)]">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

