"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(result.error ?? "Unable to sign in.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <label className="block text-sm text-slate-300">
        Email address
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
        />
      </label>
      <label className="block text-sm text-slate-300">
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500"
        />
      </label>

      {error && <p className="text-sm text-rose-400">{error}</p>}

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
        disabled={loading}
        className="w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
