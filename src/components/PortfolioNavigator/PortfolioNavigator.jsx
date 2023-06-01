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
          <svg onClick={props.remove} style={{transform: "rotate(180deg)", cursor: 'pointer', margin: '0 5 0 0'}} fill="#000000" width="18px" height="18px" viewBox="0 0 24.00 24.00" id="next" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z" fill='#2ccb69'></path></g></svg>
          <p>{props.displayProject + '/04'}</p>
          <svg onClick={props.add} style={{cursor: 'pointer', margin: '0 0 0 5'}} fill="#000000" width="18px" height="18px" viewBox="0 0 24.00 24.00" id="next" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z" fill='#2ccb69'></path></g></svg>
        </div>
      </div>
    </aside>
  )
}

export default PortfolioNavigator