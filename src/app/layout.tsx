import type { Metadata } from "next";
import ReactQueryProvider from '@/lib/react-query-provider';
import "./globals.css";


export const metadata: Metadata = {
  title: 'Collaborative Task Manager',
  description: 'Built with Next.js, Zustand, React Query, Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </body>
  </html>
  );
}
