import './SectionTwo.css'
import teste from '../../assets/images/svg/copia.png'

function SectionTwo(props) {
  return (
    <section ref={props.scrollAbout} className="section-two">
      <div className='wrap-about'>
        <div className='container-object'>
          <img src={teste} className='object-image'></img>
        </div>
        <div className='container-about'>
          <h1>About me</h1>
          <p> Hi ! I am a software enginner based on Brazil.</p>
          <p> I started programming a little over 6 months ago and never imagined I would fall in love so fast with something, which with time is proving to be more and more amazing.</p>
          <p> Currently I'm studying (ADS) and focused on Front-end development, but I don't plan to stop here, my goal is to expand my knowledge as much as possible.</p>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo