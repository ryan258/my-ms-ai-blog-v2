import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // For parsing frontmatter

// Define the shape of your post data
export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  author?: string; // Optional author field
  content?: string; // Content will be added when fetching single post
}

// Define the base directory for your markdown posts
const postsDirectory = path.join(process.cwd(), 'content', 'posts');

/**
 * Gets a list of all post slugs (filenames without .md extension).
 * Used for generateStaticParams in Next.js App Router for dynamic routes.
 */
export function getAllPostSlugs(): { slug: string }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

/**
 * Gets the data for a single post by its slug.
 * Includes both frontmatter and the raw markdown content.
 */
export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Asserting the type of 'data' to PostData, omitting content for now
  // We'll add content specifically for display
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [], // Ensure tags is always an array
    author: data.author || '',
    content, // The raw markdown content
  } as PostData; // Type assertion
}

/**
 * Gets sorted list of all posts (frontmatter only, no content).
 * Useful for displaying a list of posts on your homepage/blog index.
 */
export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Return the data, ensuring tags is an array
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      author: data.author || '',
    } as PostData;
  });

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}