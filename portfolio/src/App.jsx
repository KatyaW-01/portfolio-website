import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Articles from './pages/Articles'
import Projects from './pages/Projects'


function App() {
  return (
    <div className='app-div'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/articles' element={<Articles />}/>
      </Routes>
    </div>
  )
}

export default App
