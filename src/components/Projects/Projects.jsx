import './Projects.css'
import imageOne from '../../assets/images/to-do-list-project.png'
import imageTwo from '../../assets/images/matching-game-project.png'
import imageThree from '../../assets/images/image-3.jpg'
import imageFour from '../../assets/images/image-4.jpg'
import imageFive from '../../assets/images/image-5.jpg'

function Projects(props) {
  const imageProjects = [ 
    {id: 1,
    src: imageOne,
    info:'Uma lista de tarefas feita utilizando react, sendo possível adicionar, concluir e remover tarefas. Tendo integração com o local storage, então sempre que voltar as tarefas estarão salvas.',
    title: 'To-do List'},
    {id: 2,
    src: imageTwo,
    info:'info projeto 2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt recusandae porro fuga hic impedit aperiam ratione quidem praesentium doloremque nisi, sint officiis quibusdam provident eum repudiandae atque obcaecati corrupti non.',
    title: 'Title project2'},
    {id: 3,
    src: imageOne,
    info:'info projeto 3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt recusandae porro fuga hic impedit aperiam ratione quidem praesentium doloremque nisi, sint officiis quibusdam provident eum repudiandae atque obcaecati corrupti non.',
    title: 'Title project3'},
    {id: 4,
    src: imageOne,
    info:'info projeto 4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt recusandae porro fuga hic impedit aperiam ratione quidem praesentium doloremque nisi, sint officiis quibusdam provident eum repudiandae atque obcaecati corrupti non.',
    title: 'Title project4'},
    {id: 5,
    src: imageOne,
    info:'info projeto 5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt recusandae porro fuga hic impedit aperiam ratione quidem praesentium doloremque nisi, sint officiis quibusdam provident eum repudiandae atque obcaecati corrupti non.',
    title: 'Title project5'}]
  return (
    <div className='slider-container'>
      <div className="slider">
      {imageProjects.map((project) => {
        if(project.id === props.currentProject) {
        return <div className='container-project'>
          <h1 className='title-project'>{project.title}</h1>
          <p className='info'>{project.info}</p>
          <img src={project.src} className='active'/>
        </div>
        }
      })}
      </div>
    </div>
  )
}

export default Projects