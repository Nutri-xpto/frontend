import React from 'react'
import './NavbarElements.css'


function NewNavbar() {
  return (
    <nav>
        <ul className = "bars">
            <li className = "navlink">Inicio</li>
            <li className = "navlink">Planos</li>
            <li className = "navlink">Login</li>
        </ul>
    </nav>
  )
}

export default NewNavbar