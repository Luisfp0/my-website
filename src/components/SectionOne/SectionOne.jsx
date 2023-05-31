import './SectionOne.css'
import Contact from "../Contact/Contact"
import ContactInfo from "../ContactInfo/ContactInfo"
import Presentation from "../Presentation/Presentation"
import Header from '../Header/Header'
import { useState } from "react"


function SectionOne(props) {
  const [contactIsOpen, setContactIsOpen] = useState(false)
  
  function changeIcon() {
    setContactIsOpen(!contactIsOpen)
  } 
  return (
    <section ref={props.scrollHome} className="section-one">
      <Header scrollProjects={props.scrollProjects} scrollHome={props.scrollHome} scrollAbout={props.scrollAbout}/> 
      <Presentation/>
      <Contact 
        contactIsOpen={contactIsOpen} 
        setContactIsOpen={setContactIsOpen} 
        changeIcon={changeIcon}/>
      <ContactInfo contactIsOpen={contactIsOpen}/>
    </section>
  )
}

export default SectionOne