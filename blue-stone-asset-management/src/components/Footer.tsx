export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 py-6 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Blue Stone Asset Management.</p>
        <p>Designed for institutional investors with a focus on transparency, performance, and sustainability.</p>
      </div>
    </footer>
  );
}
