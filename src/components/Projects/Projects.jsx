import './Projects.css'
import imageOne from '../../assets/images/to-do-list-project.png'
import imageTwo from '../../assets/images/matching-game-project.png'
import imageThree from '../../assets/images/mario-game-project.png'
import imageFour from '../../assets/images/svg/coming.jpg'
import cell from '../../assets/images/cell2.png'
import notebook from '../../assets/images/mabook.png'

function Projects(props) {
  const imageProjects = [ 
    {id: 1,
    src: imageOne,
    info:'A to-do list made using react, where you can add, complete and remove tasks. Having integration with local storage, so whenever you come back the tasks are saved.',
    title: 'To-do List',
    link: 'https://to-do-list-mu-pied.vercel.app'},
    {id: 2,
    src: imageTwo,
    info:'A matching game made in html, css and javascript, but which also has a version made using react.',
    title: 'Matching Game',
    link: 'https://curso-de-js-para-react.vercel.app'},
    {id: 3,
    src: imageThree,
    info:'A simple mario game made with html, css and javascript. The goal is to jump the pipe before it hits you.',
    title: 'Mario Game',
    link: 'https://mario-game-html-css-js.vercel.app'},
    {id: 4,
    src:imageFour,
    link: 'https://github.com/Luisfp0'
  }]
  return (
    <div className='slider-container'>
      <div className='container-displays'>
        <img className='notebook' src={notebook}/>
        <div className='container-cell'>
          <img className='cell' src={cell}/>
        </div>
      </div>
      {imageProjects.map((project) => {
          if(project.id === props.currentProject) {
          return <div className='container-first-project'>
              <img src={project.src} className='active'/>
              <div className='container-second-project'>
                <img src={project.src} className='active2'/>
              </div>
          </div>
          }
        })}
    </div>
  )
}

export default Projects