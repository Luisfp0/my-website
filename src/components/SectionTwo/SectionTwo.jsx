import './SectionTwo.css'
import { useState } from 'react'
import PortfolioNavigator from "../PortfolioNavigator/PortfolioNavigator"
import Projects from '../Projects/Projects'


function SectionTwo() {
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
    <section className="section-two">
      <PortfolioNavigator 
      displayProject={displayProject}
      add={add}
      remove={remove}
      currentProject={currentProject}
      />
      <Projects currentProject={currentProject} /> 
    </section>
  )
}

export default SectionTwo