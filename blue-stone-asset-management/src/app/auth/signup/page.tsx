import SignupForm from "@/components/auth/SignupForm";

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
      <SignupForm />
    </div>
  );
}
