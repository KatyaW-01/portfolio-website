import NavBar from "../components/NavBar"

function Home() {
  return (
    <div className='home-component'>
      <NavBar />
      <div className='home-div'>
        {/* render component here */}
      </div>
      <div className='home-div-two'>
         {/* render component here */}
      </div>
      <div className='home-div-three'>
          {/* render component here */}
      </div>
    </div>
  )
}

export default Home