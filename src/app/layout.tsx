import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon Portfolio — Designer & Developer",
  description:
    "Portfolio de [ton nom] — UI/UX Designer et Fullstack Developer spécialisé en AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
