import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.variable} font-sans bg-dark-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
