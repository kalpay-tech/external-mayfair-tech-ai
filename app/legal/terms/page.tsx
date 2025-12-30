const clauses = [
  {
    title: "1. Acceptance",
    body:
      "By accessing MayfairTech.ai platforms or entering into a services agreement, you agree to these terms.",
  },
  {
    title: "2. Services",
    body:
      "Scope, deliverables, and fees are defined in each Statement of Work (SOW). Changes require mutual written consent.",
  },
  {
    title: "3. Confidentiality",
    body:
      "Both parties agree to protect confidential information and use it solely for the purpose of fulfilling the engagement.",
  },
  {
    title: "4. Intellectual property",
    body:
      "Pre-existing IP remains with the originating party. New deliverables are owned per the applicable SOW with usage rights granted to the client.",
  },
  {
    title: "5. Liability",
    body:
      "Each party’s liability is limited to direct damages and capped at fees paid in the preceding twelve months, unless prohibited by law.",
  },
  {
    title: "6. Governing law",
    body:
      "These terms are governed by English law, with disputes resolved via binding arbitration unless otherwise agreed.",
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-[color:var(--primary-dark)] px-6 py-16 text-white shadow-2xl sm:px-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--lime)]">
            Terms &amp; Conditions
          </p>
          <h1 className="text-4xl font-semibold">Framework for working with MayfairTech.ai</h1>
          <p className="text-lg text-white/80">
            These terms govern your use of our platforms and outline mutual responsibilities during client engagements.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 px-6 py-12 text-[color:var(--foreground)] shadow-xl backdrop-blur sm:px-12">
        {clauses.map((clause) => (
          <article key={clause.title}>
            <h2 className="text-2xl font-semibold">{clause.title}</h2>
            <p className="mt-2 text-base text-[color:var(--slate)]">{clause.body}</p>
          </article>
        ))}
        <p className="text-sm text-[color:var(--slate)]">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </div>
  );
}

