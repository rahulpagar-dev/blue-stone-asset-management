import Link from "next/link";

export const metadata = {
  title: "Forgot Password | Blue Stone Asset Management",
  description: "Reset your account password and regain access to your investor dashboard.",
};

export default function ForgotPasswordPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-white">Forgot Password</h1>
        <p className="mt-3 text-slate-300">
          Enter your email and we will send instructions to reset your password.
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

        <button
          type="submit"
          className="w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Send reset link
        </button>

        <p className="text-center text-sm text-slate-400">
          Remembered your password?{' '}
          <Link href="/auth/login" className="text-sky-300 hover:text-sky-200">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
