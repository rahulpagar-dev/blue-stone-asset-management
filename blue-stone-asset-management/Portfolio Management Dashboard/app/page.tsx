import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Wallet, TrendingUp } from "lucide-react";

const highlights = [
  {
    title: "Performance",
    description: "Track portfolio growth, benchmark comparisons, and key risk signals.",
    href: "/performance",
    icon: TrendingUp,
  },
  {
    title: "Wallet",
    description: "Review balances, allocations, and fund activity in one place.",
    href: "/wallet",
    icon: Wallet,
  },
  {
    title: "Insights",
    description: "Use route-based pages for deeper analytics and updates.",
    href: "/insights",
    icon: BarChart3,
  },
];

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              Server-rendered portfolio dashboard
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A proper Next.js SSR experience for Blue Stone.
            </h1>
            <p className="text-lg text-muted-foreground">
              The app now uses the Next.js app router with folder-based pages, a shared shell, and seamless home navigation from every route.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Explore the app <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
