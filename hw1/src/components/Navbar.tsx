import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-center px-16 py-8 bg-main-bg'>
        <div className="flex flex-row md:gap-16 md:text-lg text-md gap-8">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/blog">Blogs</Link></div>
            <div><Link href="/about">About</Link></div>
        </div>
    </div>
  )
}

export default Navbar