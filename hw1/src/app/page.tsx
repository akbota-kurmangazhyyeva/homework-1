// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
    return (
        <div className='min-h-screen bg-main-bg'>
            <Head>
                <title>Home - My Blog</title>
                <meta name="description" content="Welcome to my blog where you can find interesting articles on various topics." />
            </Head>
            <h1 className='text-2xl md:text-4xl text-center font-bold'>Welcome to blog of n! incubator 2024 mentors</h1>
            <img src="https://framerusercontent.com/images/F6zn3wYuthzj0Iq3EQ6tTrXzR6w.jpg?scale-down-to=2048" className="p-16 rounded-xl"></img>
        </div>
    );
}

export default Home;
