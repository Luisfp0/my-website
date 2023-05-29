import './Menu.css'

function Menu(props) {
  return (
    <nav className='container-menu'>
      <a onClick={() => props.scrollHome.current.scrollIntoView({behavior: 'smooth'})} href='#home'>Home</a>
      <a onClick={() => props.scrollAbout.current.scrollIntoView({behavior: 'smooth'})} href='#aboutMe'>About me</a>
      <a onClick={() => props.scrollProjects.current.scrollIntoView({behavior: 'smooth'})} href='#projects'>Projects</a>
    </nav>
  )
}

export default Menu