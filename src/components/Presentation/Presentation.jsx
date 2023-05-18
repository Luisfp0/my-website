import './Presentation.css'
import MyImage from '../MyImage/MyImage'

function Presentation() {
  return (
      <div className='container-presentation'>
        <div className='d-flex'>  
          <div className='ola'>
            <p>Olá!</p>
          </div>
          <div className='presentation-text'>
            <p>Meu nome é Luís Fernando, sou um desenvolvedor front-end. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt recusandae porro fuga hic impedit aperiam ratione quidem praesentium doloremque nisi, sint officiis quibusdam provident eum repudiandae atque obcaecati corrupti non.</p>
          </div>
        </div>
        <MyImage/>
      </div>
  )
}

export default Presentation