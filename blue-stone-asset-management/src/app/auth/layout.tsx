import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Account | Blue Stone Asset Management",
  description: "Secure investor account access for login, signup, and password recovery.",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-md px-6 py-16 text-slate-100">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
        {children}
      </div>
    </div>
  );
}
