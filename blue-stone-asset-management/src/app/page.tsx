import Link from "next/link";

const highlightCards = [
  {
    title: "Portfolio performance",
    description: "View real-time asset allocation, returns, and wallet balances from a secure investor dashboard.",
    href: "/dashboard",
  },
  {
    title: "Market insights",
    description: "Access daily market updates, newsletters, and CEO letters for investor decision support.",
    href: "/market-updates",
  },
  {
    title: "Corporate information",
    description: "Review newsroom coverage, investor relations disclosures, sustainability initiatives, and career opportunities.",
    href: "/about",
  },
];

export default function Home() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-6 py-10 text-slate-100">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700/40">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-300">
          Institutional asset management
        </p>
        <h1 className="mb-6 max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
          Confidence in every investment decision.
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
          Blue Stone Asset Management delivers transparent portfolio oversight, market intelligence, and investor-grade digital experiences for modern wealth and institutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/auth/signup"
            className="inline-flex items-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Create account
          </Link>
          <Link
            href="/auth/login"
            className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-100 transition hover:border-slate-500"
          >
            Sign in
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {highlightCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-[1.5rem] border border-slate-800 bg-slate-900/85 p-8 transition hover:-translate-y-1 hover:border-slate-600"
          >
            <h2 className="text-2xl font-semibold text-white transition group-hover:text-sky-300">
              {card.title}
            </h2>
            <p className="mt-4 text-slate-300">{card.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
