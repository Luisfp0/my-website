import './SectionOne.css'
import Contact from "../Contact/Contact"
import ContactInfo from "../ContactInfo/ContactInfo"
import Header from "../Header/Header"
import Presentation from "../Presentation/Presentation"
import { useState } from "react"


function SectionOne() {
  const [contactIsOpen, setContactIsOpen] = useState(false)
  
  function changeIcon() {
    setContactIsOpen(!contactIsOpen)
  } 
  return (
    <section className="section-one">
      <Header/>
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