import './SectionTwo.css'

function SectionTwo(props) {
  const arrayMe = [{
    humanFirst: `const`,
    humanSecond: `human`,
    humanThird: `{`,
    doisPontos: `:`,
    nameFirst: `name `,
    nameSecond:`'Luís Fernando',`,
    ageFirst:`age`,
    ageSecond: `21,`,
    heightFirst: `height`,
    heightSecond: `188,`,
    coderFirst: `class`,
    coderSecond: `'coder',`,
    subclassFirst: `subclass`,
    subclassSecond: `'jedi',`,
    skillsFirst: `skills`,
    skillsSecond: `'html, css, js, react'`,
    fechamentoFirst: `}`,
    fechamentoSecond: `;`
  }]
  return (
    <section ref={props.scrollAbout} className="section-two">
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
              <span className='span-object pink'>{info.humanFirst} <span className='human'>{info.humanSecond}</span><span> =</span><span className='purple'> {info.humanThird}</span></span>
              <span className='span-object'>&nbsp;&nbsp;{info.nameFirst}<span className='pink'> : </span><span className='yellow'>{info.nameSecond}</span></span>
              <span className='span-object'>&nbsp;&nbsp;{info.ageFirst}<span className='pink'> : </span><span className='yellow'>{info.ageSecond}</span></span>
              <span className='span-object'>&nbsp;&nbsp;{info.heightFirst}<span className='pink'> : </span><span className='yellow'>{info.heightSecond}</span></span>
              <span className='span-object'>&nbsp;&nbsp;{info.coderFirst}<span className='pink'> : </span><span className='yellow'>{info.coderSecond}</span></span>
              <span className='span-object'>&nbsp;&nbsp;{info.subclassFirst}<span className='pink'> : </span><span className='yellow'>{info.subclassSecond}</span></span>
              <span className='span-object'>&nbsp;&nbsp;{info.skillsFirst}<span className='pink'> :  </span><span className='yellow'>{info.skillsSecond}&nbsp;</span></span>
              <span className='span-object purple'>{info.fechamentoFirst}<span className='white'>{info.fechamentoSecond}</span></span>
            </div>
          </div>})}
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