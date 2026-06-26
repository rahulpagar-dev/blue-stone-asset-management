"use client";

import { FormEvent, useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setLoading(true);

    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    setLoading(false);
    setMessage(result.message ?? "If the email exists, instructions have been sent.");
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

      {message && <p className="text-sm text-sky-300">{message}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send reset link"}
      </button>
    </form>
  );
}
