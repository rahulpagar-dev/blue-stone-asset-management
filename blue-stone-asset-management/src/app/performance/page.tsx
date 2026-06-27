import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PerformancePage() {
  return (
    <section className="space-y-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
      <h1 className="text-4xl font-semibold text-foreground">Performance insights at a glance</h1>
      <p className="max-w-2xl text-lg text-muted">
        This route demonstrates how additional dashboard pages can be added beneath the app router.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
        Return home <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
