import './Menu.css'

function Menu(props) {
  function scrollHome() {
    props.scrollHome.current.scrollIntoView({behavior: 'smooth'})
  }
  function scrollAboutMe() {
    props.scrollAbout.current.scrollIntoView({behavior: 'smooth'})
  }
  function scrollProjects() {
    props.scrollProjects.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <nav className='container-menu'>
      <a onClick={scrollHome} href='#home'>Home</a>
      <a onClick={scrollAboutMe} href='#aboutMe'>About me</a>
      <a onClick={scrollProjects} href='#projects'>Projects</a>
    </nav>
  )
}

export default Menu