import React, { Component } from 'react'
import '../styles/NavbarElements.css'
import {NavLink} from 'react-router-dom'


export class Navbar extends Component {
  render() {
    return (
      <nav>
      <ul className = "navmenu">
        <li>
          <NavLink to = "/inicio" className = "navlink"> Inicio </NavLink>
        </li>
        <li>
          <NavLink to = "/signup" className = "navlink"> Cadastro </NavLink>
        </li>
        <li>
          <NavLink to = "/signin" className = "navlink"> Login </NavLink>
        </li>
      </ul>
    </nav>
    )
  }
}

export default Navbar
