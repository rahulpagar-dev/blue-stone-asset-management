import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WalletPage() {
  return (
    <section className="space-y-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Wallet</p>
      <h1 className="text-4xl font-semibold text-foreground">A clear view of balances and fund flow</h1>
      <p className="max-w-2xl text-lg text-muted">
        Keep an eye on liquidity, settlements, and account balances with a simplified investor workspace.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
        Return home <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
