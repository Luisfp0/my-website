import './Header.css'
import Logo from "../Logo/Logo"
import Menu from '../Menu/Menu'


function Header() {
  return (
    <header className="container-header">
      <Menu/>
      <Logo/>
    </header>
  )
}

export default Header