import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Ensure Link is imported

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My MS & AI Journey - A Blog by Ryan", // Updated title with your name
  description: "Exploring how AI and technology can help recover lost capabilities for individuals with progressive MS. Practical guides, hotkeys, and personal insights from Ryan.", // Updated description
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
            <Link href="/" className="text-xl font-bold hover:text-blue-300 transition-colors">
              My MS & AI Journey
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-300 transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300 transition-colors">Contact</Link> {/* Added Contact Link */}
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
            {/* Optional: Add social media links here as per roadmap Phase 3.2 */}
            <div className="mt-2 text-sm">
                <Link href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 mx-2">LinkedIn</Link>
                <Link href="https://twitter.com/YOUR_TWITTER_HANDLE" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 mx-2">X (Twitter)</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
