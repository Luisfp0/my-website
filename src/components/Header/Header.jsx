import './Header.css'
import Logo from "../Logo/Logo"
import Menu from '../Menu/Menu'


function Header(props) {
  return (
    <header className='header'>
      <Logo/>
      <Menu scrollProjects={props.scrollProjects}  scrollHome={props.scrollHome} scrollAbout={props.scrollAbout}/>
    </header>
  )
}

export default Header