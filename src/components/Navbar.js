import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

function Navbar() {
  return (
    <>
    <Nav>
        <Bars />
        <NavMenu>
            <NavLink to ='/inicio' activeStyle>
                Inicio
            </NavLink>
            <NavLink to ='/planos' activeStyle>
                Planos
            </NavLink>
            <NavLink to ='/login' activeStyle>
                Login
            </NavLink>
            
        </NavMenu>
    </Nav>
    </>
  )
}

export default Navbar