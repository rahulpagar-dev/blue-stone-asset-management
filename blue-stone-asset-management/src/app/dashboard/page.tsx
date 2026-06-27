import AssetAllocationChart from "@/components/AssetAllocationChart";
import PerformanceCard from "@/components/PerformanceCard";
import WalletSummary from "@/components/WalletSummary";
import { allocationData, productData } from "@/lib/mockData";

export const metadata = {
  title: "Dashboard | Blue Stone Asset Management",
  description: "Investor dashboard with portfolio performance, allocation, and wallet management.",
};

const holdings = [
  { ticker: "AAPL", name: "Apple Inc.", allocation: "13%", value: "$159,000", change: "+2.3%" },
  { ticker: "MSFT", name: "Microsoft Corp.", allocation: "10%", value: "$127,000", change: "+1.8%" },
  { ticker: "TLT", name: "iShares 20Y Treasury", allocation: "8%", value: "$98,500", change: "-0.2%" },
  { ticker: "GLD", name: "SPDR Gold Shares", allocation: "7%", value: "$86,600", change: "+0.7%" },
];

const transactions = [
  { date: "Jun 25", description: "Bought 120 NVDA shares", amount: "$59,496", status: "Settled" },
  { date: "Jun 24", description: "Sold 80 TLT shares", amount: "$7,388", status: "Settled" },
  { date: "Jun 23", description: "Deposit credited to wallet", amount: "$25,000", status: "Completed" },
  { date: "Jun 22", description: "Rebalanced equities allocation", amount: "$12,300", status: "Completed" },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-6 py-10 text-slate-100">
      <section className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Investor dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Portfolio overview</h1>
            <p className="mt-3 max-w-2xl text-slate-400">
              Monitor diversified holdings, allocations, and transaction activity across your managed accounts.
            </p>
          </div>
          <div className="rounded-full bg-slate-950 px-4 py-2 text-sm text-slate-300">
            Updated just now
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <PerformanceCard title="Total portfolio value" value="$1,250,400" change="+12.4% YTD" />
          <PerformanceCard title="Available cash" value="$82,500" change="+3.2%" />
          <PerformanceCard title="Net contributions" value="$45,800" change="+4.6%" />
          <PerformanceCard title="Active holdings" value="14" change="4 new positions" />
        </div>
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <AssetAllocationChart data={productData} />
        <WalletSummary />
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Product performance</h2>
              <p className="mt-2 text-slate-400">Recent return and allocation information for major holdings.</p>
            </div>
            <span className="rounded-full bg-slate-950 px-3 py-1 text-sm text-slate-300">Updated weekly</span>
          </div>

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
              <h2 className="text-2xl font-semibold text-white">Recent activity</h2>
              <p className="mt-2 text-slate-400">Latest transactions, deposits, and portfolio actions.</p>
            </div>
            <span className="rounded-full bg-slate-950 px-3 py-1 text-sm text-slate-300">4 items</span>
          </div>

          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.date + tx.amount} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{tx.date}</span>
                  <span>{tx.status}</span>
                </div>
                <p className="mt-3 text-white">{tx.description}</p>
                <p className="mt-2 text-slate-300">{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Current holdings</h2>
            <p className="mt-2 text-slate-400">Breakdown of major portfolio positions and latest performance trends.</p>
          </div>
          <button className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-100 transition hover:border-slate-500">
            Export report
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90">
          <table className="min-w-full text-left text-sm text-slate-300">
            <thead className="border-b border-slate-800 bg-slate-900 text-slate-400">
              <tr>
                <th className="px-6 py-4">Holding</th>
                <th className="px-6 py-4">Allocation</th>
                <th className="px-6 py-4">Market value</th>
                <th className="px-6 py-4">Change</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding) => (
                <tr key={holding.ticker} className="border-b border-slate-800 last:border-none">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{holding.ticker}</div>
                    <div className="text-slate-500">{holding.name}</div>
                  </td>
                  <td className="px-6 py-4">{holding.allocation}</td>
                  <td className="px-6 py-4">{holding.value}</td>
                  <td className="px-6 py-4 text-sky-300">{holding.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
