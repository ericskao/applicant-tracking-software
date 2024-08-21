import TopNav from '@/components/features/TopNav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lorem Ipsum ATS',
  description: 'Manage your applications and jobs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        <div className="flex flex-col  min-h-screen">
          <TopNav />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
