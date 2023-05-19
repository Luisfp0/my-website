import './PortfolioNavigator.css'
import arrow from '../../assets/images/arrow.png'
import StickNavigator from '../StickNavigator/StickNavigator'

function PortfolioNavigator(props) {

  return (
    <aside className="portfolio-navigator">
      <div className='align-vertical'>
        <span>{props.displayProject}</span>
        <StickNavigator active={props.currentProject}/>
        <div className='next-prev'>
          <img className='arrow' onClick={props.remove} src={arrow}></img>
          <p>{props.displayProject + '/05'}</p>
          <img className='arrow' onClick={props.add} src={arrow}></img>
        </div>
      </div>
    </aside>
  )
}

export default PortfolioNavigator