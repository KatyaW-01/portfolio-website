import NavBar from "../components/NavBar"
import '../styles/articles.css'

function Articles() {
  return (
    <div>
       <NavBar/>
      <div className='articles-component'>
        <p>links to Medium articles go here</p>
      </div> 
    </div>
  )
}

export default Articles