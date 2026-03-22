import {NavLink} from "react-router-dom"
import '../styles/navbar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-links'>
        <NavLink to='/' className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } >Katya Weicht</NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }>Projects</NavLink>
        <NavLink to='/articles' className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } >Articles</NavLink>
      </div>
    </nav>
  )
}

export default NavBar