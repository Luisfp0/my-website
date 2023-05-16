import Logo from "../Logo/Logo"
import Menu from '../Menu/menu'

function Header() {
  return (
    <>
    <div className="container-header">
      <Menu/>
      <Logo/>
    </div>
    </>
  )
}

export default Header