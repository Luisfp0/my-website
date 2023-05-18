import './PortfolioNavigator.css'
import arrow from '../../assets/images/arrow.png'
import { useState } from 'react'
import StickNavigator from '../StickNavigator/StickNavigator'

function PortfolioNavigator() {
  const[currentProject, setCurrentProject] = useState(1)
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
      <div className='align-vertical'>
        <span>{displayProject}</span>
        <span className='block-number'></span>
        <StickNavigator active={currentProject}/>
        <div className='next-prev'>
          <img className='arrow' onClick={remove} src={arrow}></img>
          <p>{displayProject + '/05'}</p>
          <img className='arrow' onClick={add} src={arrow}></img>
      </div>
      </div>
    </div>
  )
}

export default PortfolioNavigator