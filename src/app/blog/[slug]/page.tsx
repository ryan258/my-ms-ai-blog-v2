import { getAllPostSlugs, getPostData, PostData } from '@/lib/posts'; // Using '@/lib' alias
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'; // For rendering markdown
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown
import type { Metadata } from 'next'; // For dynamic metadata

// Function to generate static params for all blog posts at build time
// This is crucial for Static Site Generation (SSG) with the App Router
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs; // Returns an array like [{ slug: 'post-1' }, { slug: 'post-2' }]
}

// Function to generate dynamic metadata for each post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostData(params.slug);

  if (!post) {
    return {}; // Or return a default if the post doesn't exist
  }

  return {
    title: post.title,
    description: post.description,
    // Add other meta tags if needed, e.g., Open Graph for social media sharing
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : [],
      url: `https://yourdomain.com/blog/${post.slug}`, // Replace with your actual domain
    },
  };
}


// Your React Server Component for the blog post page
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let post: PostData;

  try {
    post = getPostData(slug);
  } catch (error) {
    console.error(`Failed to load post: ${slug}`, error);
    notFound(); // Next.js utility to render a 404 page
  }

  // Check if post data was retrieved successfully
  if (!post || !post.content) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Article container with Tailwind's prose class for beautiful markdown styling */}
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
          className="markdown-content" // Add a class for potential custom styling if needed
          remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
        >
          {post.content}
        </ReactMarkdown>

        {/* Optional: Add navigation or related posts here */}
        <footer className="mt-8 border-t pt-4 text-center text-gray-500 dark:text-gray-600">
          <p>This post is part of my journey in leveraging AI for accessibility.</p>
        </footer>
      </article>
    </div>
  );
}