import { getSortedPostsData, PostData } from '@/lib/posts';
import Link from 'next/link'; // Import Link for internal navigation
import type { Metadata } from 'next'; // For page metadata

// Metadata for the blog index page
export const metadata: Metadata = {
  title: "Blog - My MS & AI Journey",
  description: "Explore articles on how AI and technology are used to recover lost capabilities and enhance life with progressive MS. Practical guides, hotkeys, and personal insights.",
};

export default function BlogIndexPage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        My Journey & Insights
      </h1>

      <section className="space-y-10">
        {allPostsData.map(({ slug, title, date, description, tags }) => (
          <article key={slug} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 transform hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700">
            <Link href={`/blog/${slug}`} className="block">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Published on <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              {description}
            </p>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      {allPostsData.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
          No posts found yet. Check back soon for new insights!
        </p>
      )}
    </div>
  );
}