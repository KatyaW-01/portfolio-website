import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import '../styles/articles.css'

function Articles() {
  return (
    <div>
       <NavBar/>
      <div className='articles-component'>
        <p>links to Medium articles go here</p>
      </div> 
      <Footer />
    </div>
  )
}

export default Articles