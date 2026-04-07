import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin", "arabic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CVLogic - صناعة المستقبل الوظيفي بالذكاء الاصطناعي",
  description: "منصة CVLogic العالمية لبناء السير الذاتية الاحترافية باستخدام الذكاء الاصطناعي، مع دعم كامل للعربية والإنجليزية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} font-sans bg-dark-900 text-white relative overflow-x-hidden`}>
        <Particles />
        <Navbar />
        <main className="relative z-10 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
