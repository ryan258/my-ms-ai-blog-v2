import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // <-- IMPORT THE LINK COMPONENT

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My MS & AI Journey - A Blog by [Your Name]", // Update your site title
  description: "Exploring how AI and technology can help recover lost capabilities for individuals with progressive MS. Practical guides, hotkeys, and personal insights.", // Update your site description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Example simple header */}
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Use Link component here */}
            <Link href="/" className="text-xl font-bold hover:text-blue-300 transition-colors">
              My MS & AI Journey
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  {/* Use Link component here */}
                  <Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
                </li>
                {/* Add more navigation links as needed */}
                <li>
                  {/* Use Link component here */}
                  <Link href="/about" className="hover:text-blue-300 transition-colors">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main content area where your pages will render */}
        <main>{children}</main> {/* Your page.tsx content will be rendered here */}

        {/* Example simple footer */}
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <div className="container mx-auto">
            &copy; {new Date().getFullYear()} My MS & AI Journey. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}