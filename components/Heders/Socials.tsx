import { Clock, Heart, ShoppingBag, ShoppingBasket } from 'lucide-react'
import React from 'react'

const Socials = () => {
  return (
    <div className=' flex '>
        <nav className='flex gap-6 cursor-pointer '>
          <ShoppingBag  className='text-red-500 hover:opacity-5'/>  
          <ShoppingBasket className='text-blue-500  hover:opacity-5' />
          <Clock  className='text-green-500 hover:opacity-5' />
          <Heart className='text-orange-500 hover:opacity-5' />
        </nav>
      
    </div>
  )
}

export default Socials
