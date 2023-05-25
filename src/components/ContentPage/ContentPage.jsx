import './ContentPage.css'
import SectionOne from '../SectionOne/SectionOne'
import SectionTwo from '../SectionTwo/SectionTwo'

function ContentPage() {
  return (
    <div className='container'>
      <div className='page-wrapper'>
        <SectionOne/>
        <SectionTwo/>
      </div>
    </div>
  )
}

export default ContentPage