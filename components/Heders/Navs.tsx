import Link from 'next/link'
import React from 'react'

const Navs = () => {
  return (
    <div className='flex'>
      <nav  className='flex gap-5'>
        <Link href={'/'} className=''>
        <h1 className='text-bold text-xl text-black transition-opacity  hover:opacity-10'>
            Product
        </h1>
        </Link>
        <Link href={'/'}>
        <h1 className='text-bold text-xl text-black transition-opacity  hover:opacity-10'>
            Price
        </h1>
        </Link>
        <Link href={'/'}>
        <h1 className='text-bold text-xl text-black transition-opacity  hover:opacity-10'>
            Service
        </h1>
        </Link>
        <Link href={'/'}>
        <h1 className='text-bold text-xl text-black transition-opacity  hover:opacity-10'>
            About
        </h1>
        </Link>
      </nav>
    </div>
  )
}

export default Navs
