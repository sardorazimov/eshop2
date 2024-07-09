import React from 'react'
import Logo from './Logo'
import Navs from './Navs'
import Socials from './Socials'
import { Button } from '../ui/button'
import Mobile from './Mobile'

const Header = () => {
  return (
    <div className='flex w-full p-2 h-20  border-b bg-white border-zinc-600 '>
      <div className='flex'>
       <div className='flex w-[120px] h-full  md:flex '>
        <Logo />
      </div>
      <main className='hidden lg:flex w-[550px] h-full items-center justify-center '>
       <Navs />
      </main>
      <div className='hidden lg:flex w-[600px] h-full  items-center justify-center'>
        <Socials />
      </div>
      <div className=' items-center justify-center gap-3 hidden lg:flex'>
        <Button >Login</Button>
        <Button >Docs</Button>
      </div> 
        </div>
    </div>
  )
}

export default Header
