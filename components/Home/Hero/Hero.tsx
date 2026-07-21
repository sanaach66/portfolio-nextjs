'use client'
import { Button } from '@/components/ui/button'
import { Contact, Download, FolderOpen } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    // <div className='relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,
    // rgba(244,244,254,1)_42.3%),rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden 
    // dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]'>
    //   Hero
    // </div>
    <section id='home'
        className="relative dark:min-h-screen min-h-[80vh] dark:pt-0 pt-30 flex items-center justify-center overflow-hidden
        bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
        dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]">
        {/* content */}
        <div className='relative z-10 text-center'>
            {/* sub title */}
            <div data-aos="fade-up" className='sm:mb-6'>
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm 
                text-muted-foreground dark:text-gray-200 mb-8'>
                    <span className='w-2 h-2 rounded-full bg-green-500 '></span>
                    Available for opportunities
                </span>
            </div>
            {/* Title */}
            <h1 
                data-aos="fade-up" 
                data-aos-delay="100"
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bold mb-6'>Hi, I&apos;m <span className='
                text-purple-800 dark:text-yellow-300'>Sana Ullah</span> <br /> <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-semibold'>WordPress Developer</span>
            </h1>
            {/* Type write effect */}
            <div 
                data-aos="fade-up" 
                data-aos-delay="200"
                className='text-md sm:text-md md:text-lg text-black dark:text-white font-semibold 
                mb-4 sm:mb-8 h-12'>
                <TypeAnimation 
                sequence={[
                    
                    "WooCommerce Expert",
                    2000,
                    "Elementor & Bricks Developer",
                    2000,
                    "AI Integration for WordPress",
                    2000,
                    "Custom WordPress Development",
                    2000,
                    "Website Speed Optimization",
                    2000,
                ]}
                wrapper='p'
                speed={50}
                repeat={Infinity}
                className='font-mono'
                />
            </div>
            {/* Description */}
            <p 
                data-aos="fade-up" 
                data-aos-delay="300"
                className='text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10'>
                I help businesses build fast, secure, and SEO-friendly WordPress websites, WooCommerce stores, and custom web solutions using Elementor, Bricks Builder, and modern development practices. I also integrate AI-powered features to automate workflows, improve customer engagement, and enhance website functionality.
            </p>
            {/* buttons */}
            <div 
                data-aos="fade-up" 
                data-aos-delay="400"
                className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size={'lg'} asChild className='w-fit mx-auto sm:mx-0'>
                    <a href="#_">
                        <FolderOpen className='w-5 h-5 mr-2' />
                        View Projects
                    </a>

                </Button>
                <Button size="lg" asChild className="w-fit mx-auto sm:mx-0">
                    <a
                        href="https://wa.me/923099543250"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with Sana Ullah on WhatsApp"
                    >
                        <FaWhatsapp className="w-5 h-5 mr-2" />
                        Let&apos;s Talk
                    </a>
                </Button>
            </div>
        </div>

    </section>

  )
}

export default Hero
