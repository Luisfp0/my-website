import './ContentPage.css'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation'
import Contact from '../Contact/Contact'

function ContentPage() {
  return (
    <div className='page-wrapper'>
      <Header/>
      <section className="content-page">
        <Presentation/>
        <Contact></Contact>
      </section>
    </div>
  )
}

export default ContentPage