
import {NavLink} from 'react-router-dom'
import './NavbarElements.css'


function NewNavbar() {

  return (
    <nav>
      <ul className = "navmenu">
        <li>
          <NavLink to="/inicio" className = "navlink" >Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/planos" className = "navlink" >Planos</NavLink>
        </li>
        <li>
          <NavLink to="/login" className = "navlink">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NewNavbar