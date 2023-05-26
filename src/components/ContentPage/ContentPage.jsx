import './ContentPage.css'
import SectionOne from '../SectionOne/SectionOne'
import SectionThree from '../SectionThree/SectionThree'
import SectionTwo from '../SectionTwo/SectionTwo'

function ContentPage() {
  return (
    <div className='container'>
      <div className='page-wrapper'>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
      </div>
    </div>
  )
}

export default ContentPage