export default function WalletSummary() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
      <h3 className="text-xl font-semibold text-white">Wallet summary</h3>
      <div className="mt-6 space-y-3 text-slate-300">
        <div className="flex items-center justify-between">
          <span>Available cash</span>
          <span>$82,500</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Pending deposits</span>
          <span>$8,200</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Withdrawable balance</span>
          <span>$51,000</span>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button className="rounded-full bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
          Deposit funds
        </button>
        <button className="rounded-full border border-slate-700 px-4 py-3 text-sm text-slate-100 transition hover:border-slate-500">
          Withdraw funds
        </button>
      </div>
    </div>
  );
}
