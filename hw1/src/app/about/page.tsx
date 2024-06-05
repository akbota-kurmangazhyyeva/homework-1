// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
    return (
        <div className='min-h-screen bg-main-bg flex items-center justify-center'>
            <Head>
                <title>About - My Blog</title>
                <meta name="description" content="Learn more about the author of this blog and the topics covered." />
            </Head>
            <p>This is the about page.</p>
        </div>
    );
}

export default About;
