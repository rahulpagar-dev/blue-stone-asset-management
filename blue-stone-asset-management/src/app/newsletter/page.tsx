export const metadata = {
  title: "Newsletter | Blue Stone Asset Management",
  description: "Subscribe to investor newsletters and receive timely company insights.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-6xl px-6 py-10 text-slate-100">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">Investor Newsletter</h1>
        <p className="mt-4 text-slate-300">Subscribe for weekly market commentary, portfolio insights, and executive updates.</p>

        <form className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
          <input
            type="email"
            placeholder="Email address"
            className="rounded-3xl border border-slate-700 bg-slate-950 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-500"
          />
          <button
            type="submit"
            className="rounded-full bg-sky-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
