import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

// @TODO clarify about advent pro font and footer logo
// const adventPro = Advent_Pro({
//   variable: "--font-advent-pro",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Dada",
  description:
    "Dada is a graphic design studio that specializes in logo design, branding, web design, web development, and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[80vh] pt-[theme(height.nav-height)]">{children}</main>
        <div id="nav-backdrop"></div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
