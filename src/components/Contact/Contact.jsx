import './Contact.css'

function Contact(props) {
  const toggleImage = props.contactIsOpen === false
    ? 'btn-contact'
    : 'btn-contact btn-contact-open'
  return (
    <button onClick={props.changeIcon} className={toggleImage}></button>
  )
}

export default Contact