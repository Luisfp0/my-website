import './StickNavigator.css'

function StickNavigator(props) { 
  let active = 'Stick'
    if(props.currentProject === props.stickProject1) {
      active = 'Stick active'
    }
  return ( 
    <>
      <a href='#' active={props.stickProject1} className={active}></a>
      <a href='#' active={props.stickProject2} className={active}></a>
      <a href='#' active={props.stickProject3} className={active}></a>
      <a href='#' active={props.stickProject4} className={active}></a>
      <a href='#' active={props.stickProject5} className={active}></a>
    </>
  )
}

export default StickNavigator