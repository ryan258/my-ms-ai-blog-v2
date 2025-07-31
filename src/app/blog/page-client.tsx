'use client'; // This component needs to be a Client Component

import Link from 'next/link';
import { PostData } from '@/lib/posts';
import { useState, useMemo } from 'react';

// Define your categories as a constant array for easy management
const CATEGORIES = [
  'All', // Option to show all posts
  'Creative AI',
  'Automation & Disability',
  'Offsetting Brain Fog',
  'Assistive Tech Hacks',
];

interface BlogIndexClientPageProps {
  allPostsData: PostData[];
}

export default function BlogIndexClientPage({ allPostsData }: BlogIndexClientPageProps) {
  // State to manage the currently selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Memoize the filtered posts to avoid re-calculating on every render
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return allPostsData;
    }
    return allPostsData.filter(post =>
      post.tags.includes(selectedCategory)
    );
  }, [selectedCategory, allPostsData]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        My Journey & Insights
      </h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
              ${selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}
            `}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="space-y-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(({ slug, title, date, description, tags }) => (
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
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            No posts found for the selected category.
          </p>
        )}
      </section>
    </div>
  );
}
