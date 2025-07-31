import { getAllPostSlugs, getPostData, PostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PostPageClient from './page-client'; // Import the new client component

// This function still runs on the server to pre-render all possible post pages
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

// This function now runs on the server to generate metadata for each post page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostData(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : [],
      url: `https://yourdomain.com/blog/${post.slug}`,
    },
  };
}

// This is the main Server Component for the dynamic page
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let post: PostData;

  try {
    // This server-side function call is where the 'fs' module is used
    post = getPostData(slug);
  } catch (error) {
    console.error(`Failed to load post: ${slug}`, error);
    notFound();
  }

  if (!post || !post.content) {
    notFound();
  }

  // Pass the server-fetched data to the client component
  return <PostPageClient post={post} />;
}
