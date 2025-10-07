import type { Metadata } from "next";
import { Header } from "@repo/sections";
import "@repo/ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMS - Content Management",
  description: "Manage your products and content",
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
          logo="⚙️ CMS"
          logoHref="/"
          links={[
            { label: 'Dashboard', href: '/' },
            { label: 'Products', href: '/' },
            { label: 'Settings', href: '/settings' },
          ]}
          rightContent={
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin</span>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm">
                Logout
              </button>
            </div>
          }
        />
        {children}
      </body>
    </html>
  );
}
