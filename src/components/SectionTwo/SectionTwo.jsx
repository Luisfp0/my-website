import './SectionTwo.css'

function SectionTwo() {
  const arrayMe = [{
    human: `let human? = {`,
    name: `name: 'Luís Fernando',`,
    age:`age: 21,`,
    height: `height: 188,`,
    coder: `class: 'coder',`,
    subclass: `subclass: 'jedi',`,
    skills: `skills: 'html, css, js, react'`,
    fechamento: `};`
  }]
  return (
    <section className="section-two">
      <div className='wrap-about'>
        <div className='container-object'>
          <div className='grade-container'>
            <span className='grade'>1</span>
            <span className='grade'>2</span>
            <span className='grade'>3</span>
            <span className='grade'>4</span>
            <span className='grade'>5</span>
            <span className='grade'>6</span>
            <span className='grade'>7</span>
            <span className='grade'>8</span>
          </div>
          {arrayMe.map((info) =>{return <div>
            <div> 
              <span className='span-object'>{info.human}</span>
              <span className='span-object'>{info.name}</span>
              <span className='span-object'>{info.age}</span>
              <span className='span-object'>{info.height}</span>
              <span className='span-object'>{info.coder}</span>
              <span className='span-object'>{info.subclass}</span>
              <span className='span-object'>{info.skills}</span>
              <span className='span-object'>{info.fechamento}</span>
            </div>
          </div>})}
        </div>
        <div className='container-about'>
          <h1>About me</h1>
          <p> Hi ! I am a software enginner based on Brazil.</p>
          <p> I started programming a little over 6 months ago and never imagined I would fall in love so fast with an area, which with time is proving to be more and more amazing.</p>
          <p> Currently I'm studying (ADS) and focused on Front-end development, but I don't plan to stop here, my goal is to expand my knowledge as much as possible.</p>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo