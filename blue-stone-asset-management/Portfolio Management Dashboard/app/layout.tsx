import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Blue Stone Asset Management",
  description: "Portfolio management dashboard converted to Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
