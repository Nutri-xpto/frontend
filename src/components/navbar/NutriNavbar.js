import React from 'react'
import '../styles/NavbarElements.css'
import {NavLink} from 'react-router-dom'
import { useLocation } from "react-router-dom";
 /* it will be linking to plans, for a while*/
function NutriNavbar () {
    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === "/signin" || pathname === "/signup"  || pathname === "/inicio" || pathname === "/") return null;
    return (
      <nav>
      <ul className = "navmenu">
        <li>
          <NavLink to = "/diets" className = "navlink"> Dietas </NavLink> 
        </li>
        <li>
          <NavLink to = "/Patients" className = "navlink"> Pacientes </NavLink>
        </li>
        <li>
          <NavLink to = "" className = "navlink"> Loja </NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default NutriNavbar
