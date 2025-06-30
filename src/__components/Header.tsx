import React from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
function Header() {
  return (
    <div className='flex max-w-[1280px] flex-row items-center justify-between gap-5 py-5 m-auto'>
      <Link href='/' className="uppercase font-roboto font-extrabold text-[1.25rem]">SHOP.CO</Link>
      <ul className='flex gap-[1rem] justify-between items-center'>
        <Link href='/' className='flex gap-2'>
          Shop
          <ChevronDownIcon className='w-[1rem]'/>
        </Link>
        <Link href='/'>
          On Sale
        </Link>
        <Link href='/'>
          New Arrivals
        </Link>
        <Link href='/'>
          Brands
        </Link>
      </ul>
      <div className="flex bg-neutral rounded-4xl px-[1rem] py-[.5rem] gap-3 w-xl">
        <MagnifyingGlassIcon className='text-black w-[1.25rem] opacity-40'/>
        <input type="text" className='bg-transparent' placeholder='Search for products...'/>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link href='/'>
          <ShoppingCartIcon className='w-[1.5rem]'/>
        </Link>
        <Link href='/'>
          <UserCircleIcon className='w-[1.5rem]'/>
        </Link>
      </div>
    </div>
  )
}

export default Header