export const metadata = {
  title: "CEO Letters | Blue Stone Asset Management",
  description: "Read executive letters from our CEO and shareholder updates.",
};

const letters = [
  {
    title: "Q2 shareholder letter: positioning for resilience",
    date: "June 2026",
    excerpt: "We remain focused on durable income, risk management, and sustainable capital allocation.",
  },
  {
    title: "Annual outlook: navigating uncertainty with conviction",
    date: "January 2026",
    excerpt: "Our strategy is built to deliver long-term performance across market environments.",
  },
];

export default function CeoLettersPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-6 py-10 text-slate-100">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">CEO Letters</h1>
        <p className="mt-4 text-slate-300">Executive updates shared with investors and stakeholders.</p>

        <div className="mt-10 space-y-6">
          {letters.map((letter) => (
            <article key={letter.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{letter.date}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{letter.title}</h2>
              <p className="mt-3 text-slate-400">{letter.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
