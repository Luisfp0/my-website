import picture from '../../assets/images/my-image.jpg'
import './MyImage.css'

function MyImage() {
  return (
  <div className='container-picture'>
      <img src={picture}/>
  </div>
  )
}

export default MyImage