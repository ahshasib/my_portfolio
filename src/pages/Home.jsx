import React from 'react'
import HeroSection from '../component/HeroSection'
import AboutMe from '../component/AboutMe'
import Skills from '../component/Skills'
import Project from '../component/Project'
import ContactMe from '../component/ContactMe'

const Home = () => {
  return (
    <div className=''>
        <HeroSection></HeroSection>
      
       <AboutMe></AboutMe>
       <Skills></Skills>
       <Project></Project>
       <ContactMe></ContactMe>
       
    </div>
  )
}

export default Home