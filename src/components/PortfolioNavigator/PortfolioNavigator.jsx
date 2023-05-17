import './PortfolioNavigator.css'
import arrow from '../../assets/images/arrow.png'
import { useState } from 'react'
import StickNavigator from '../StickNavigator/StickNavigator'

function PortfolioNavigator() {
  const[currentProject, setCurrentProject] = useState(1)
  const[stickProject1, setStickProject1] = useState(1)
  const[stickProject2, setStickProject2] = useState(2)
  const[stickProject3, setStickProject3] = useState(3)
  const[stickProject4, setStickProject4] = useState(4)
  const[stickProject5, setStickProject5] = useState(5)
  const displayProject = '0' + currentProject


  function add() {
    if(currentProject === 5) {
      return
    }
    setCurrentProject(currentProject + 1)
  }

  function remove() {
    if(currentProject === 1){
      return
    }
    setCurrentProject(currentProject - 1)
  }

  return (
    <div className="portfolio-navigator">
      <span>{displayProject}</span>
      <nav className='stick-navigator'>
        <StickNavigator 
        currentProject={currentProject}
        stickProject1={stickProject1}
        stickProject2={stickProject2}
        stickProject3={stickProject3}
        stickProject4={stickProject4}
        stickProject5={stickProject5} />
      </nav>
      <div className='next-prev'>
        <img className='arrow' onClick={remove} src={arrow}></img>
        <p>{displayProject + '/05'}</p>
        <img className='arrow' onClick={add} src={arrow}></img>
      </div>
    </div>
  )
}

export default PortfolioNavigator