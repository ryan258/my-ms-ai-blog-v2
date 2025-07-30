import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/posts'; // Import your posts data
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home - My MS & AI Journey",
  description: "Welcome to My MS & AI Journey. Discover how I'm using AI and technology to navigate life with progressive MS, recover lost capabilities, and share practical solutions.",
};

export default function HomePage() {
  // Get only the latest few posts for the homepage
  const latestPosts: PostData[] = getSortedPostsData().slice(0, 3); // Get top 3 latest posts

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 leading-tight">
        My MS & AI Journey
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Welcome! This blog is a personal chronicle of leveraging AI and assistive technologies
        to adapt to progressive Multiple Sclerosis, recover lost capabilities, and explore new possibilities.
        Join me as I share practical guides, innovative hotkeys, and my insights into living and creating with MS.
      </p>

      <div className="flex justify-center gap-4 mb-12">
        <Link href="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
          Explore All Posts
        </Link>
        <Link href="/about" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
          About Me
        </Link>
      </div>

      <section className="mt-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Latest Insights</h2>
        {latestPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map(({ slug, title, description }) => (
              <article key={slug} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between h-full transform hover:scale-[1.03] transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700">
                <Link href={`/blog/${slug}`} className="block">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                    {description}
                  </p>
                </Link>
                <Link href={`/blog/${slug}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline self-end mt-auto">
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No posts found yet. Check back soon for new insights!
          </p>
        )}
      </section>

    </div>
  );
}