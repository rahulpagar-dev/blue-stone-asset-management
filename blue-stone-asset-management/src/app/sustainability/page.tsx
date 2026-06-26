export const metadata = {
  title: "Corporate Sustainability | Blue Stone Asset Management",
  description: "Explore our commitment to sustainable investing, governance, and social responsibility.",
};

export default function SustainabilityPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-6xl px-6 py-10 text-slate-100">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">Corporate Sustainability</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Blue Stone is committed to sustainable investment principles, responsible governance, and long-term value for stakeholders.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Environmental stewardship",
              description: "We integrate carbon-aware insights and climate resilience into our investment process.",
            },
            {
              title: "Social responsibility",
              description: "We prioritize diversity, inclusion, and community engagement across our firm and portfolios.",
            },
            {
              title: "Governance excellence",
              description: "Strong oversight and transparent reporting guide every decision we make.",
            },
            {
              title: "Impact-focused strategies",
              description: "We offer sustainable investment solutions that align client goals with measurable outcomes.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
