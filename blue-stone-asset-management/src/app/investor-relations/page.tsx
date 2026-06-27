import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InvestorRelationsPage() {
  return (
    <section className="space-y-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Investor Relations</p>
      <h1 className="text-4xl font-semibold text-foreground">Transparent reporting for every stakeholder</h1>
      <p className="max-w-2xl text-lg text-muted">
        Access investor communications, performance reporting, and financial disclosures through a polished experience.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
        Return home <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
