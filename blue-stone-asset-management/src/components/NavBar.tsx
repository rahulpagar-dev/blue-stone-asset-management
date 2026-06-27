import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/insights", label: "Insights" },
  { href: "/market-updates", label: "Market Updates" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/careers", label: "Careers" },
];

export default function NavBar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-100">
          Blue Stone
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-800"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
