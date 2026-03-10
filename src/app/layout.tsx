import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyApp",
  description: "Autonomous multi-session AI coding app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
