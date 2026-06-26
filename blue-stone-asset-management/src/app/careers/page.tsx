export const metadata = {
  title: "Careers | Blue Stone Asset Management",
  description: "Explore career opportunities and join the Blue Stone investment team.",
};

const roles = [
  { title: "Investment Analyst", location: "New York, NY" },
  { title: "Client Relationship Associate", location: "London, UK" },
  { title: "Sustainability Researcher", location: "Remote" },
];

export default function CareersPage() {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-7xl px-6 py-10 text-slate-100">
      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">Careers</h1>
        <p className="mt-4 text-slate-300">Become part of a team focused on disciplined investing and client success.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <h2 className="text-2xl font-semibold text-white">{role.title}</h2>
              <p className="mt-3 text-slate-400">{role.location}</p>
              <button className="mt-6 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                Apply now
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
