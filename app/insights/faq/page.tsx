const faqs = [
  {
    question: "Do you work with existing vendor ecosystems?",
    answer:
      "Yes. We integrate with incumbent platforms, SaaS products, and custom systems using APIs, middleware, and secure data pipelines.",
  },
  {
    question: "How do engagements typically start?",
    answer:
      "We begin with a structured discovery sprint to define objectives, success metrics, and solution architecture before moving into build and run phases.",
  },
  {
    question: "Where are your teams located?",
    answer:
      "We operate hybrid delivery centers across the UK, Europe, Asia, and North America, enabling 24/7 support and localized expertise.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Retail, manufacturing, healthcare, logistics, and financial services are our core focus areas, but we tailor programs to any complex enterprise.",
  },
];

export default function InsightsFaqPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="rounded-3xl border border-white/10 bg-[color:var(--primary-dark)] px-6 py-16 text-white shadow-2xl sm:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--lime)]">
            FAQ
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Answers to common partnership questions</h1>
          <p className="text-lg text-white/80">
            Learn more about how MayfairTech.ai engages with enterprise teams and what to expect from our delivery
            model.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 px-6 py-12 text-[color:var(--foreground)] shadow-xl backdrop-blur sm:px-12">
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/10 bg-[color:var(--primary-dark)]/[0.35] p-6">
              <dt className="text-lg font-semibold">{faq.question}</dt>
              <dd className="mt-2 text-sm text-[color:var(--slate)]">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

