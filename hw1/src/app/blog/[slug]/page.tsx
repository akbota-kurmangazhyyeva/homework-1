// pages/blog/[slug].tsx
'use client'
import { useRouter } from 'next/navigation'
import Head from 'next/head';
import Link from 'next/link';
import posts from '../../../data/posts.json';  
import { slugify } from '../../../utils/slugify'; 
import { Post } from '@/types'; 

const BlogPost = ({ params }: { params: { slug: string } }) => {
    console.log(params.slug)
    const post = posts.find(post => slugify(post.title) === params.slug);
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='bg-main-bg min-h-screen'>
            <Head>
                <title>{post.title} - My Blog</title>
                <meta name="description" content={post.description} />
            </Head>
            <div className="flex flex-col md:flex-row gap-8 p-8">
                <div><img src={post.image} className="mx-auto " /></div>
                <div className='flex flex-col gap-16'>
                <h1 className='text-2xl md:text-4xl'>{post.title}</h1>
                <p>{post.description}</p>
                <p >@{post.author}</p>
                </div>

            </div>
        </div>
    );
}

export default BlogPost;
