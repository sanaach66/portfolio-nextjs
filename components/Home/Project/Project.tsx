import SectionHeadings from '@/components/Helper/SectionHeadings'
import { projects } from '@/data'
import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section id='projects' className='py-16 bg-gray-100 dark:bg-gray-900'>
      <SectionHeadings title_1='Featured' title_2='Projects' description='My recent work and projects' />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto '>
        {projects.map((project,index)=>{
            return <div 
                      data-aos="fade-up" 
                      data-aos-delay={index * 100}
                      data-aos-anchor-placement="top-center"
                      key={index}>
                      <ProjectCard {...project} />
                    </div>

        })}
      </div>
    </section>
  )
}

export default Project
