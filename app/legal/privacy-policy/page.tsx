const sections = [
  {
    title: "1. Data we collect",
    body:
      "We collect contact details, company information, communication history, and analytics data when you interact with our website, products, or delivery teams.",
  },
  {
    title: "2. How data is used",
    body:
      "Data powers service delivery, customer support, marketing communications, and platform improvements. We never sell personal data to third parties.",
  },
  {
    title: "3. Sharing & transfers",
    body:
      "Information may be shared with trusted subprocessors who meet our security standards. Cross-border transfers comply with GDPR, UK GDPR, and other applicable laws.",
  },
  {
    title: "4. Security & retention",
    body:
      "We apply encryption, access controls, and continuous monitoring. Data is stored only as long as necessary for the stated purposes or regulatory requirements.",
  },
  {
    title: "5. Your rights",
    body:
      "You can request access, correction, deletion, or restriction of your data. Contact privacy@mayfairtech.ai to submit a request.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-[color:var(--primary-dark)] px-6 py-16 text-white shadow-2xl sm:px-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--lime)]">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-semibold">Protecting your information</h1>
          <p className="text-lg text-white/80">
            This policy outlines how MayfairTech.ai handles personal data across our platforms and services.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 px-6 py-12 text-[color:var(--foreground)] shadow-xl backdrop-blur sm:px-12">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-2 text-base text-[color:var(--slate)]">{section.body}</p>
          </article>
        ))}
        <p className="text-sm text-[color:var(--slate)]">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </div>
  );
}

