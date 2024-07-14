/* eslint-disable @next/next/no-img-element */
"use clinet"
import React, { useState } from 'react'

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AnimatePresence , motion} from 'framer-motion';

const Products = () => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <main  className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-3 m-1 gap-4",
       
      )}>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
        <div className= '  flex w-[280px] h-[280px] border border-dashed'>
          <img src="/3.png" alt="" className='' />
        </div>
    </main>
 
  )
}

export default Products
