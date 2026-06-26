import type { AssetProduct } from "@/lib/mockData";

export default function AssetAllocationChart({ data }: { data: AssetProduct[] }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
      <h3 className="text-xl font-semibold text-white">Asset distribution</h3>
      <dl className="mt-6 space-y-4">
        {data.map((item) => (
          <div key={item.title} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{item.title}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-900">
              <div
                className="h-full rounded-full bg-sky-500 transition-all"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
