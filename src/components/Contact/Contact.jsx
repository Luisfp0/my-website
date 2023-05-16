import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [contactIsOpen, setContactIsOpen] = useState(false)
  const toggleImage = contactIsOpen === false
    ? 'btn-contact'
    : 'btn-contact btn-contact-open'
  function changeIcon() {
    setContactIsOpen(!contactIsOpen)
    console.log(contactIsOpen)
  }
  return (
    <button onClick={changeIcon} className={toggleImage}></button>
  )
}

export default Contact