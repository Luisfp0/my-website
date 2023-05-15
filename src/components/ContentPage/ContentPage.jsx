import './ContentPage.css'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'

function ContentPage() {
  return (
    <div className='page-wrapper'>
      <Header/>
      <section className="content-page">
        <Presentation/>
      </section>
    </div>
  )
}

export default ContentPage