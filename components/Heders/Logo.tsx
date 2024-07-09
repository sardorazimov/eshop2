/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex w-full h-full md:items-center md:justify-center '>
       <Link href={'/'} className='flex gap-2 '>
        <img  src='/Logo.svg' className='text-red-400' />
        <h1 className='text-3xl text-slate-900'>Shop.1</h1>
       </Link>
    </div>
  )
}

export default Logo
