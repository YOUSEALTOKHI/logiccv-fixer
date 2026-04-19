import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LogicCV',
  description: 'AI-powered resume analysis and ATS optimization.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
