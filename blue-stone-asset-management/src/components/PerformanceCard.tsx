export default function PerformanceCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-sky-300">{change}</p>
    </div>
  );
}
