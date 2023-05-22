import './Presentation.css'
import MyImage from '../MyImage/MyImage'

function Presentation() {
  return (
      <div className='container-presentation'>
        <div className='d-flex'>  
          <div className='ola'>
            <p>Front-end Developer</p>
          </div>
          <div className='presentation-text'>
            <p>Me chamo <span className='name'>Luís</span>, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor placeat modi, et laboriosam, facilis dolores minima vel atque totam iste perspiciatis numquam ducimus officia? Doloribus, recusandae dolore! Iure, fugit possimus?</p>
          </div>
        </div>
        <MyImage/>
      </div>
  )
}

export default Presentation