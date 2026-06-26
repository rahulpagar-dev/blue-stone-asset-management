export const metadata = {
  title: "Dashboard | Blue Stone Asset Management",
  description: "Investor dashboard with portfolio performance, allocation, and wallet management.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-6 py-10 text-slate-100">
      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Investor dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Portfolio overview</h1>
            </div>
            <div className="rounded-full bg-slate-950 px-4 py-2 text-sm text-slate-300">
              Updated just now
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Total portfolio value", value: "$1,250,400" },
              { label: "Daily change", value: "+$4,120 (0.33%)" },
              { label: "Available cash", value: "$82,500" },
              { label: "Invested assets", value: "5 products" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-white">Portfolio allocation</h2>
          <p className="mt-3 text-slate-300">Sector exposures and product-weighted allocation across your account.</p>
          <div className="mt-8 space-y-4">
            {[
              { label: "Equities & ETFs", value: "42%" },
              { label: "Crypto", value: "18%" },
              { label: "Gold", value: "15%" },
              { label: "Silver", value: "10%" },
              { label: "Cash", value: "15%" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-950">
                  <div className="h-full rounded-full bg-sky-500" style={{ width: item.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <h2 className="text-2xl font-semibold text-white">Product performance</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Gold", holding: "$190,300", change: "+2.3%" },
              { title: "Silver", holding: "$95,800", change: "+1.8%" },
              { title: "ETF", holding: "$520,700", change: "+0.9%" },
              { title: "Crypto", holding: "$136,600", change: "-1.2%" },
            ].map((product) => (
              <div key={product.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">{product.title}</p>
                <p className="mt-3 text-xl font-semibold text-white">{product.holding}</p>
                <p className="mt-2 text-sm text-sky-300">{product.change}</p>
              </div>
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
