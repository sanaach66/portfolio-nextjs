import SectionHeadings from '@/components/Helper/SectionHeadings'
import { highlights, stats } from '@/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-16 bg-gray-100 dark:bg-gray-900'>
      {/* SectionHeading */}
      <SectionHeadings 
      title_1='About' 
      title_2='Me' 
      description='WordPress, Woocommerce & AI Integration Expert' />
      {/* main about */}
      <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
        {/* Image */}
        <div className='relative'>
            <div 
                data-aos="fade-right" 
                data-aos-delay="0"
                data-aos-anchor-placement="top-center"
                className='aspect-square rounded-2xl overflow-hidden p-2'>
                <Image 
                src={"/images/sana.png"} 
                alt='Sana Ullah - WordPress Developer specializing in WooCommerce, Elementor, Bricks Builder and AI Integration'
                width={700}
                height={700}
                className='w-full h-full object-center rounded-xl'
                />
            </div>

        </div>
        {/* Content */}
        <div 
          data-aos="fade-left" 
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className='space-y-6'>
          <h3 className='text-2xl font-semibold'>
            Building Fast, SEO-Friendly & Conversion-Focused WordPress Websites
          </h3>
          <p className='text-muted-foreground leading-relaxed'>
            I&apos;m Sana Ullah, a WordPress Developer with over 5 years of professional 
            experience building high-performance websites for businesses, startups, 
            agencies, and eCommerce brands. I specialize in custom WordPress development, 
            WooCommerce, Elementor, Bricks Builder, and website performance optimization, 
            creating websites that are fast, secure, responsive, SEO-friendly, and easy to manage.
          </p>
          <p className='text-muted-foreground leading-relaxed'>
            Whether you need a custom business website, WooCommerce store, landing page, membership 
            platform, website redesign, or advanced WordPress customization, I develop scalable solutions 
            tailored to your business goals. I also integrate AI-powered features such as intelligent 
            chatbots, workflow automation, and API integrations to improve customer engagement and 
            streamline business processes. My focus is always on clean code, excellent user experience, 
            long-term maintainability, and measurable business results.
          </p>
          {/* Highlights */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
            {highlights.map((item)=>{
              return <div key={item.text} className='flex items-center gap-3 text-sm'>
                <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                  <item.icon className='w-4 h-4 text-blue-500 dark:text-white' />
                </div>
                <span className='text-muted-foreground '>{item.text}</span>
              </div>
            })}
          </div>
          

        </div>

      </div>
      {/* Stats */}
      <div className='mt-16 w-[80%] mx-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat)=>{
            return <div 
              data-aos="zoom-in" 
              data-aos-delay="300"
              data-aos-anchor-placement="top-center"
              key={stat.label} 
              className='bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center'>
              <div className='text-3xl md:text-4xl font-bold text-purple-600 mb-2'>{stat.value}
                <div className='text-sm text-muted-foreground'>{stat.label}</div>
              </div>
            </div>
          })}
        </div>

      </div>
    </section>
  )
}

export default About
