import NavBar from "../components/NavBar"
import '../styles/home.css'

function Home() {
  return (
    <div>
      <NavBar />
      <div className='home-component'>
        <p>home page with about me</p>
      </div>
    </div>
  )
}

export default Home