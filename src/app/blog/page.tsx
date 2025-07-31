import { getSortedPostsData, PostData } from '@/lib/posts';
import type { Metadata } from 'next';
import BlogIndexClientPage from './page-client';

// Metadata for the blog index page
// This export must be in a Server Component
export const metadata: Metadata = {
  title: "Blog - My MS & AI Journey",
  description: "Explore articles on how AI and technology are used to recover lost capabilities and enhance life with progressive MS. Practical guides, hotkeys, and personal insights.",
};

// This is the Server Component for the /blog route.
// It fetches all the post data and passes it to the Client Component.
export default function BlogIndexPageServer() {
  // getSortedPostsData() now runs on the server, so 'fs' is available
  const allPostsData: PostData[] = getSortedPostsData();

  return <BlogIndexClientPage allPostsData={allPostsData} />;
}
