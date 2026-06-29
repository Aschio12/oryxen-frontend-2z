import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Oryxen | Training, Nutrition, Performance",
  description:
    "A sophisticated fitness platform for programs, exercise progressions, class scheduling, and nutrition planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased selection:bg-brand-primary selection:text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
