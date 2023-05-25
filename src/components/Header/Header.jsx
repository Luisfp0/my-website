import './Header.css'
import Logo from "../Logo/Logo"
import Menu from '../Menu/Menu'


function Header() {
  return (
    <header className="container-header">
      <Logo/>
      <Menu/>
    </header>
  )
}

export default Header