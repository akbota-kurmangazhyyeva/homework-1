// pages/blog/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import { slugify } from '../../utils/slugify';
import { Post } from '../../types'; // Import the Post type
import posts from '../../data/posts.json';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
    if (!posts || !posts.length) {
        console.error('No posts found in the data.'); // Debugging statement
        return <div>No posts found.</div>;
    }

    return (
        <div className='min-h-screen bg-main-bg p-16'>
            <Head>
                <title>Blog - My Blog</title>
                <meta name="description" content="Read our latest blog posts on various topics." />
            </Head>
            <h1 className='flex items-center justify-center text-xl mb-8'>Blogs</h1>
            <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                {posts.map((post: Post) => ( // Use the Post type for type safety
                    <li key={post.id}>
                        <Link href={`/blog/${slugify(post.title)}`}>
                            <BlogCard post={post}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
