import AssetAllocationChart from "@/components/AssetAllocationChart";
import PerformanceCard from "@/components/PerformanceCard";
import WalletSummary from "@/components/WalletSummary";
import { allocationData, productData } from "@/lib/mockData";

export const metadata = {
  title: "Dashboard | Blue Stone Asset Management",
  description: "Investor dashboard with portfolio performance, allocation, and wallet management.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-6 py-10 text-slate-100">
      <section className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Investor dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Portfolio overview</h1>
          </div>
          <div className="rounded-full bg-slate-950 px-4 py-2 text-sm text-slate-300">
            Updated just now
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <PerformanceCard title="Total portfolio value" value="$1,250,400" change="+1.6%" />
          <PerformanceCard title="Daily change" value="+$4,120" change="+0.33%" />
          <PerformanceCard title="Available cash" value="$82,500" change="" />
          <PerformanceCard title="Invested assets" value="5 products" change="" />
        </div>
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <AssetAllocationChart data={productData} />
        <WalletSummary />
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-white">Product performance</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {productData.map((product) => (
              <PerformanceCard
                key={product.title}
                title={product.title}
                value={product.holding}
                change={product.change}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Wallet management</h2>
              <p className="mt-2 text-slate-300">Deposit, withdraw, and manage currency holdings.</p>
            </div>
            <span className="rounded-full bg-slate-950 px-3 py-1 text-sm text-slate-300">Balance $82,500</span>
          </div>

          <div className="space-y-4">
            {[
              { label: "Deposit funds", description: "Add cash to your investment wallet." },
              { label: "Withdraw funds", description: "Request a withdrawal to your linked bank account." },
              { label: "Currency management", description: "Track USD, EUR, and CAD balances." },
            ].map((action) => (
              <div key={action.label} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                <p className="font-semibold text-white">{action.label}</p>
                <p className="mt-2 text-sm text-slate-400">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
