import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

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
      <ForgotPasswordForm />
    </div>
  );
}
