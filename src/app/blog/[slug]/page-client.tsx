'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PostData } from '@/lib/posts';
// import Link from 'next/link';

interface PostPageClientProps {
  post: PostData;
}

export default function PostPageClient({ post }: PostPageClientProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article className="prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
        {/* Post Header */}
        <header>
          <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Published on <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            {post.author && ` by ${post.author}`}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Markdown Content */}
        <ReactMarkdown
          className="markdown-content"
          remarkPlugins={[remarkGfm]}
        >
          {post.content || ''}
        </ReactMarkdown>

        {/* Optional: Add navigation or related posts here */}
        <footer className="mt-8 border-t pt-4 text-center text-gray-500 dark:text-gray-600">
          <p>This post is part of my journey in leveraging AI for accessibility.</p>
        </footer>
      </article>
    </div>
  );
}
