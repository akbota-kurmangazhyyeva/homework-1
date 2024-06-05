import React from 'react';
import { Post } from '../types';

interface BlogCardProps {
    post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className='flex flex-col gap-2 rounded-lg shadow-md shadow-white border-gray-300 hover:scale-105 p-4'>
            <div className='text-xl'>{post.author}</div>
            <img src={post.image}></img>
            <div>{post.title}</div>
            <div className='text-gray-300'>{post.date}</div>
        </div>
    );
}

export default BlogCard;
