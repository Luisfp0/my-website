import './SectionTwo.css'

function SectionTwo() {
  const arrayMe = [{
    human: `let human? = [{`,
    name: `name: Luís Fernando,`,
    age:`age: 21,`,
    height: `188,`,
    coder: `class: coder,`,
    subclass: `subclass: jedi`,
    skills: `skills: html, css, js, react`,
    fechamento: `}];`
  }]
  return (
    <section className="section-two">
      <div className='wrap-about'>
        <div className='container-object'>
          {arrayMe.map((info) =>{return <div>
            <span className='span-object'>{info.human}</span>
            <span className='span-object'>{info.name}</span>
            <span className='span-object'>{info.age}</span>
            <span className='span-object'>{info.coder}</span>
            <span className='span-object'>{info.subclass}</span>
            <span className='span-object'>{info.skills}</span>
            <span className='span-object'>{info.fechamento}</span>
          </div>})}
        </div>
        <div className='container-about'>
          <h1>About me</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus alias eveniet enim quo in expedita non doloribus facilis, esse fugit maxime harum sequi, impedit accusantium molestias eaque recusandae culpa assumenda. </span>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo