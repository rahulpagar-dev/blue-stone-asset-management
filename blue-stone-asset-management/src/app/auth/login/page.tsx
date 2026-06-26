import Link from "next/link";

export const metadata = {
  title: "Login | Blue Stone Asset Management",
  description: "Sign in to manage your portfolio, wallet, and investment dashboard.",
};

export default function LoginPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <p className="mt-3 text-slate-300">
          Access your investor dashboard and financial overview.
        </p>
      </header>

      <form className="space-y-6">
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
            placeholder="Enter your password"
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
          />
        </label>

        <div className="flex items-center justify-between text-sm text-slate-400">
          <Link href="/auth/forgot-password" className="hover:text-slate-100">
            Forgot password?
          </Link>
          <Link href="/auth/signup" className="text-sky-300 hover:text-sky-200">
            Create an account
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
