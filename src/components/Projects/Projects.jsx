import './Projects.css'
import imageOne from '../../assets/images/image-1.jpg'
import imageTwo from '../../assets/images/image-2.jpg'
import imageThree from '../../assets/images/image-3.jpg'
import imageFour from '../../assets/images/image-4.jpg'
import imageFive from '../../assets/images/image-5.jpg'

function Projects(props) {
  const imageProjects = [
    {id: 1,
    src: imageOne},
    {id: 2,
    src: imageTwo},
    {id: 3,
    src: imageThree},
    {id: 4,
    src: imageFour},
    {id: 5,
    src: imageFive}]
  return (
    <div className='slider-container'>
      <div className="slider">
      {imageProjects.map((project) => {
        if(project.id === props.currentProject) {
        return <img src={project.src} className='active'/>
        }
      })}
      </div>
    </div>
  )
}

export default Projects