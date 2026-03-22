import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import '../styles/home.css'

function Home() {
  return (
    <div>
      <NavBar />
      <div className='home-component'>
        <p>home page with about me</p>
      </div>
      <Footer />
    </div>
  )
}

export default Home