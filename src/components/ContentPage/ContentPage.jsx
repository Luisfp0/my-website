import './ContentPage.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'
import Contact from '../Contact/Contact'
import ContactInfo from '../ContactInfo/ContactInfo'

function ContentPage() {
  const [contactIsOpen, setContactIsOpen] = useState(false)
  function changeIcon() {
    setContactIsOpen(!contactIsOpen)
  } 
  return (
    <div className='page-wrapper'>
      <Header/>
      <section className="content-page">
        <Presentation />
        <ContactInfo contactIsOpen={contactIsOpen} />
        <Contact
        contactIsOpen={contactIsOpen} 
        setContactIsOpen={setContactIsOpen} 
        changeIcon={changeIcon} />
      </section>
    </div>
  )
}

export default ContentPage