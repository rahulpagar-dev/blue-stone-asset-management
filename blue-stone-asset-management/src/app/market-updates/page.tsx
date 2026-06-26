export const metadata = {
  title: "Market Updates | Blue Stone Asset Management",
  description: "Daily market commentary, news, and investment insights for investors.",
};

const updates = [
  {
    title: "Global markets rally on macroeconomic optimism",
    summary: "Equity markets are seeing gains as central banks signal a stable rate environment.",
    date: "June 26, 2026",
  },
  {
    title: "Gold and silver maintain safe-haven demand",
    summary: "Precious metals continue to outperform amid equity market rotation.",
    date: "June 25, 2026",
  },
  {
    title: "ETF flows show increasing interest in sustainable strategies",
    summary: "Investors favor diversified funds with ESG and low-volatility exposures.",
    date: "June 24, 2026",
  },
];

export default function MarketUpdatesPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-6 py-10 text-slate-100">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">Market updates</h1>
        <p className="mt-4 text-slate-300">Daily commentary, research highlights, and market intelligence for investors.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{item.date}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-slate-400">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
