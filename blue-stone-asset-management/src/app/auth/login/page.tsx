import LoginForm from "@/components/auth/LoginForm";

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
      <LoginForm />
    </div>
  );
}
