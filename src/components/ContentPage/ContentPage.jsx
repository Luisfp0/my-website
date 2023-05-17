import './ContentPage.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'
import Contact from '../Contact/Contact'
import ContactInfo from '../ContactInfo/ContactInfo'
import MyImage from '../MyImage/MyImage.jsx'
import PortfolioNavigator from '../PortfolioNavigator/PortfolioNavigator'

function ContentPage() {
const [contactIsOpen, setContactIsOpen] = useState(false)
  
function changeIcon() {
  setContactIsOpen(!contactIsOpen)
} 

  return (
    <div className='page-wrapper'>
      <Header/>
      <section className="content-page-one">
        <Presentation />
        <MyImage/>
        <ContactInfo contactIsOpen={contactIsOpen} />
        <Contact
        contactIsOpen={contactIsOpen} 
        setContactIsOpen={setContactIsOpen} 
        changeIcon={changeIcon} />
      </section>
      <section className='content-page-two'>
        <PortfolioNavigator/>
      </section>
    </div>
  )
}

export default ContentPage