import './Projects.css'
import imageOne from '../../assets/images/to-do-list-project.png'
import imageOneCell from '../../assets/images/to-do-list-cell.png'
import imageTwo from '../../assets/images/matching-game-project.png'
import imageTwoCell from '../../assets/images/matching-game-cell.png'
import imageThree from '../../assets/images/mario-game-project.png'
import imageFour from '../../assets/images/svg/coming.jpg'
import cell from '../../assets/images/cell2.png'
import notebook from '../../assets/images/mabook.png'

function Projects(props) {
  console.log(props.currentProject)
  let styleCell = 'container-cell'
  let styleImgCell = 'active2'
  if (props.currentProject === 1) {
    styleCell = 'container-cell'
  } else if (props.currentProject === 2) {
    styleCell = 'container-cell'
    } else {
      styleCell = 'none'
      styleImgCell = 'none'
    }

  const imageProjects = [ 
    {id: 1,
    src: imageOne,
    srcCell: imageOneCell,
    info:'A to-do list made using react, where you can add, complete and remove tasks. Having integration with local storage, so whenever you come back the tasks are saved.',
    title: 'To-do List',
    link: 'https://to-do-list-mu-pied.vercel.app'},
    {id: 2,
    src: imageTwo,
    srcCell: imageTwoCell,
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
        <div className={styleCell}>
          <img className='cell' src={cell}/>
        </div>
      </div>
      {imageProjects.map((project) => {
          if(project.id === props.currentProject) {
          return <>
            <div className='container-first-project'>
              <a href={project.link} target="_blank">
                <img src={project.src} className='active'/>
              </a>
              <a>
                <div className='container-second-project'>
                  <img src={project.srcCell} className={styleImgCell}/>
                </div>
              </a>
            </div>
          <div className='container-info'>
            <div className='infos'>
              <h1 className='tittle-project'>{project.title}</h1>
              <p className='description'>{project.info}</p>
            </div>
          </div>
          </>
          }
        })}
    </div>
  )
}

export default Projects