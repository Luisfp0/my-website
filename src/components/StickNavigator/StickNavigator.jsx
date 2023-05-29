import './StickNavigator.css'

function StickNavigator(props) { 
  const sticks = [
    {id:1},
    {id:2},
    {id:3},
    {id:4}]
  return ( 
    <nav>
      {
        sticks.map((stick) => {
          const currentClass = props.active === stick.id ? 'stick stick-active' : 'stick'
          return <a 
            href={stick.id} 
            className={currentClass}>
          </a> 
        })
      }
    </nav>
  )
}

export default StickNavigator