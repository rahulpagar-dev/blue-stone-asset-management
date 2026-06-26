import Link from "next/link";

export const metadata = {
  title: "Signup | Blue Stone Asset Management",
  description: "Register for an investor account and start tracking your portfolio.",
};

export default function SignupPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-white">Create a new account</h1>
        <p className="mt-3 text-slate-300">
          Start tracking investments, deposits, and portfolio performance.
        </p>
      </header>

      <form className="space-y-6">
        <label className="block text-sm text-slate-300">
          Full name
          <input
            type="text"
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Password
          <input
            type="password"
            placeholder="Create a password"
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Sign up
        </button>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-sky-300 hover:text-sky-200">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
