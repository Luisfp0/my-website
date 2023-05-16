import './ContactInfo.css'
import logoInsta from '../../assets/images/icon-instagram.svg'
import logoTwitter from '../../assets/images/icon-twitter.svg'
import logoDribbble from '../../assets/images/icon-dribbble.svg'
import logoWhatsapp from  '../../assets/images/icon-whatsapp.svg'

function ContactInfo(props) {

  const contactOpen = props.contactIsOpen === false
  ? 'container-contact-info'
  : 'container-contact-info container-active'
  return (
    <div className={contactOpen}>
        <h2 className='title-contact' >Contato</h2>
        <p>luisfernandodepaulosousa0020@gmail.com</p>
        <p>+55 62 9 9322 2660</p>
        <div className="social-links">
          <a href="https://www.instagram.com/n_andooo/" className="social">
            <img src={logoInsta} alt="Instagram" />
          </a>
          <a href="https://twitter.com/Louisfp0" className="social">
            <img src={logoTwitter} alt="Twitter" />
          </a>
          <a href="#" className="social">
            <img src={logoDribbble} alt="Dribbble" />
          </a>
          <a href="https://wa.me/5562993222660" className="social">
            <img src={logoWhatsapp} alt="Whatsapp" />
          </a>
      </div>
      <div className="corner"></div>
    </div>
  )
}

export default ContactInfo