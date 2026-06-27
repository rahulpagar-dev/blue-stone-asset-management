import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="space-y-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Market updates</p>
      <h1 className="text-4xl font-semibold text-foreground">Daily commentary and market intelligence</h1>
      <p className="max-w-2xl text-lg text-muted">
        Research-driven updates that help investors make informed decisions with confidence.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {updates.map((item) => (
          <article key={item.title} className="rounded-3xl border border-border/70 bg-background/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">{item.date}</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h2>
            <p className="mt-3 text-muted">{item.summary}</p>
          </article>
        ))}
      </div>

      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
        Return home <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
