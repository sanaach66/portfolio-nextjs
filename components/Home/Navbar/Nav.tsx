'use client';
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { NavLinks } from '@/Constant/Constant'
import { Download, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';

type Props ={
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
    const [navBg, setNavBg]=useState(false);
    useEffect(()=>{
        const handler = ()=>{
            if(window.scrollY>=90) setNavBg(true);
            if(window.scrollY<90) setNavBg(false);
        };

        window.addEventListener("scroll",handler);
        return () => window.removeEventListener("scroll",handler);
    },[]);
  return (
    <div className={`transition-all ${navBg ? "bg-white dark:bg-gray-800 shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto '>
        {/* logo */}
        {/* <p className='text-xl md:text-xl font-bold tracking-wider uppercase'>SANA ULLAH</p> */}
        {/* Mobile (default) */}
            <p className="block md:hidden text-xl font-bold tracking-wider uppercase">
            SU
            </p>

            {/* Tablet/Desktop */}
            <p className="hidden md:block text-xl font-bold tracking-wider uppercase">
            SANA ULLAH
            </p>
        {/* Navlinks */}
        <div className='hidden lg:flex items-center space-x-10'>
            {NavLinks.map((link,index)=>{
                return <a key={index}
                 href={link.href} 
                 className='dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all
                duration-200'>
                    <p>{link.name}</p>
                </a>
            })}
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-4'>
            {/* CV button */}
            <a href="https://wa.me/923099543250" target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sana Ullah on WhatsApp" className='box-border relative z-20 inline-flex items-center justify-center
            w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300
            bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300
            ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none'>
                <span className='relative z-20 flex items-center space-x-2 text-sm'>
                    <FaWhatsapp className='w-4 h-4' />
                    <span>Let&apos;s Talk</span>
                </span>
            </a>
            {/* theme toggler */}
            <ThemeToggler />
            {/* burger menu */}
            <MenuIcon onClick={openNav} className='w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden' />
        </div>
      </div>
    </div>
  )
}

export default Nav
