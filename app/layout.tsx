"use client";

import './globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import HeaderButtons from '@/components/HeaderButtons';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/';

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen py-16 relative">
          <div className="container">
            <Header />

            {/* Hero + buttons persist */}
            <div className="flex flex-col items-start text-left mb-12">
              <h1 className="hero-title blinking-cursor">ryanKing()</h1>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <HeaderButtons activePath={pathname} />
              </div>
            </div>

            {/* Main content changes per route */}
            <div id="main-content">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
