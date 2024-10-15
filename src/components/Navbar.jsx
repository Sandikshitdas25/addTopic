
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-green-600 flex justify-between p-4 text-xl font-semibold m-2'>
      <span>Blog<span className='text-gray-700'>Posts</span></span>
      <Link href={"/addTopic"}><span>Add</span></Link>
    </div>
  )
}

export default Navbar
