import type { Metadata } from "next";
import { Header } from "@repo/sections";
import "@repo/ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop - E-commerce Store",
  description: "Browse and purchase products from our store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header
          logo="🛍️ Shop"
          logoHref="/"
          links={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/' },
            { label: 'About', href: '/about' },
          ]}
          rightContent={
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          }
        />
        {children}
      </body>
    </html>
  );
}
