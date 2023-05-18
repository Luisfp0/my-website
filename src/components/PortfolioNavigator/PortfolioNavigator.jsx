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
      <span>{displayProject}</span>
      <StickNavigator />
      <div className='next-prev'>
        <img className='arrow' onClick={remove} src={arrow}></img>
        <p>{displayProject + '/05'}</p>
        <img className='arrow' onClick={add} src={arrow}></img>
      </div>
    </div>
  )
}

export default PortfolioNavigator