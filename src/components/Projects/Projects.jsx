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
          <img src={project.src} className='active'/> 
          <div className='container-info'>
            <h1 className='title-project'>{project.title}</h1>
            <p className='info'>{project.info}</p>
            <button className='btn-more'>
              <a target="_blank" href={project.link}>More</a>
            </button>
          </div>
        </div>
        }
      })}
        <div className='control-tv'>
          <div className='container-volume'> 
            <svg className='minus' width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Complete"><g id="minus"><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="4" x2="20" y1="12" y2="12"/></g></g></svg>
            <svg className='sound' width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Complete"><g id="volume-up"><polygon fill="none" points="2.9 9 6.9 9 11.9 3 11.9 21 6.9 16 1.9 16 1.9 9 2.9 9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M15.5,19.5a7.3,7.3,0,0,0,7-7.5,7.3,7.3,0,0,0-7-7.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M15.5,15a3,3,0,0,0,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></svg>
            <svg className='plus' width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Complete"><g data-name="add" id="add-2"><g><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/></g></g></g></svg>
          </div>
          <svg width="15px" height="15px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-419.000000, -720.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M379.79996,578 L376.649968,578 L376.649968,574 L370.349983,574 L370.349983,578 L367.19999,578 L367.19999,568.813 L373.489475,562.823 L379.79996,568.832 L379.79996,578 Z M381.899955,568.004 L381.899955,568 L381.899955,568 L373.502075,560 L363,569.992 L364.481546,571.406 L365.099995,570.813 L365.099995,580 L372.449978,580 L372.449978,576 L374.549973,576 L374.549973,580 L381.899955,580 L381.899955,579.997 L381.899955,570.832 L382.514204,571.416 L384.001,570.002 L381.899955,568.004 Z" id="home-[#1391]"></path></g></g></g></svg>
          <div className='container-channel'>
            <svg className='minus' width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Complete"><g id="minus"><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="4" x2="20" y1="12" y2="12"/></g></g></svg>
            <span>ch</span>
            <svg className='plus' width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Complete"><g data-name="add" id="add-2"><g><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/></g></g></g></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects