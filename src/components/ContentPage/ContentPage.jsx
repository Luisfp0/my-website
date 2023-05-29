import './ContentPage.css'
import { useRef } from 'react'
import SectionOne from '../SectionOne/SectionOne'
import SectionThree from '../SectionThree/SectionThree'
import SectionTwo from '../SectionTwo/SectionTwo'

function ContentPage() {
  const scrollToAbout = useRef()
  const scrollToHome = useRef()
  const scrollToProjects = useRef()
  return (
    <div className='container'>
      <div className='page-wrapper'>
        <SectionOne scrollProjects={scrollToProjects} scrollHome={scrollToHome} scrollAbout={scrollToAbout}/>
        <SectionTwo scrollAbout={scrollToAbout}/>
        <SectionThree scrollProjects={scrollToProjects}/>
      </div>
    </div>
  )
}

export default ContentPage