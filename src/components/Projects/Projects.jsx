import './Projects.css'
import imageOne from '../../assets/images/to-do-list-project.png'
import imageTwo from '../../assets/images/matching-game-project.png'
import imageThree from '../../assets/images/mario-game-project.png'

function Projects(props) {
  const imageProjects = [ 
    {id: 1,
    src: imageOne,
    info:'Uma lista de tarefas feita utilizando react, sendo possível adicionar, concluir e remover tarefas. Tendo integração com o local storage, então sempre que voltar as tarefas estarão salvas.',
    title: 'To-do List',
    link: 'https://to-do-list-mu-pied.vercel.app'},
    {id: 2,
    src: imageTwo,
    info:'Um jogo da memória feito em html, css e javascript, mas que também tem uma versão feita utilizando react.',
    title: 'Matching Game',
    link: 'https://curso-de-js-para-react.vercel.app'},
    {id: 3,
    src: imageThree,
    info:'Um jogo do Mario feito em html, css e javascript, onde o objetivo é pular antes do cano atingi-lo.',
    title: 'Mario Game',
    link: 'https://mario-game-html-css-js.vercel.app'},
    {id: 4,
    src: imageOne,
    info:'info projeto 4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt recusandae porro fuga hic impedit aperiam ratione quidem praesentium doloremque nisi, sint officiis quibusdam provident eum.',
    title: 'Title project4'},
    {id: 5,
    src: imageOne,
    info:'info projeto 5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt recusandae porro fuga hic impedit aperiam ratione quidem praesentium doloremque nisi, sint officiis quibusdam provident eum.',
    title: 'Title project5'}]
  return (
    <div className='slider-container'>
      <div className="slider">
      {imageProjects.map((project) => {
        if(project.id === props.currentProject) {
        return <div>
          <div className='container-info'>
            <h1 className='title-project'>{project.title}</h1>
            <p className='info'>{project.info}</p>
            <button className='btn-more'>
              <a href={project.link}>More</a>
            </button>
          </div>
          <img src={project.src} className='active'/>
        </div>
        }
      })}
      </div>
    </div>
  )
}

export default Projects