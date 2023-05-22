import './Presentation.css'
import MyImage from '../MyImage/MyImage'

function Presentation() {
  const coder = '<coder>'
  return (
      <div className='container-presentation'>
        <div className='d-flex'>  
          <div className='ola'>
            <p>{coder}</p>
          </div>
          <div className='presentation-text'>
            <p>I am a <span className='name'>Front End Developer</span> who focuses on wrighting clean, elegant and efficient code.</p>
          </div>
        </div>
        <MyImage/>
      </div>
  )
}

export default Presentation