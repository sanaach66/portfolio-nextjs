'use client'
import SectionHeadings from '@/components/Helper/SectionHeadings'
import { userReviewData } from '@/data';
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const ClientReview = () => {

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide:1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide:1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide:1
  }
};
    
  return (
    <section id='testimonials' className='py-20 bg-gray-100 dark:bg-gray-900'>
        <div className='w-[80%] mx-auto'>
            <SectionHeadings
            title_1='Our Client'
            title_2='Review'
            description='Checkout our client reviews'
            />
            <div className='mt-14'>
                <Carousel
                    
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    arrows={true}
                    >
                    {userReviewData.map((user)=>{
                        return <div key={user.id}>
                            <ReviewCard user={user} />
                        </div>
                    })}
                </Carousel>  
            </div>
        </div>
      
    </section>
  )
}

export default ClientReview

