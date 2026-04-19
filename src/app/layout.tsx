import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { I18nProvider } from '@/components/I18nProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'arabic'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin', 'arabic'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'CVLogic - AI-Powered Resume Analysis',
  description: 'Optimize your resume with advanced ATS analysis powered by AI',
  keywords: 'resume analysis, ATS, career optimization, resume writing, job search',
  openGraph: {
    title: 'CVLogic - AI-Powered Resume Analysis',
    description: 'Land your dream job with AI-driven resume optimization',
    type: 'website',
    url: 'https://cvlogic.io',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans bg-light-gray text-dark-gray antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
