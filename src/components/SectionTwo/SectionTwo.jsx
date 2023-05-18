import './SectionTwo.css'
import PortfolioNavigator from "../PortfolioNavigator/PortfolioNavigator"
import Projects from '../Projects/Projects'


function SectionTwo() {
  return (
    <section className="section-two">
      <PortfolioNavigator/>
      <Projects/>
    </section>
  )
}

export default SectionTwo