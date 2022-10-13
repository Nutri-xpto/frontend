import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav`
    background-image: url("images/vegetables.png");
    height: 194px;
    width: 1452px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
 export const NavLink = styled(Link)`
    color: #58692E;
    background-color: rgba(255, 255, 255, 0.5);
    font-family: 'DM Sans';
    font-weight: 600;
    display: flex;
    margin: 15px;
    align-items: center;
    text-decoration: none;
    padding: 0 4rem;
    height:20%;
    cursor: pointer;
    &.active {
      color: #D56B1D;
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #808080;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute; 
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
    }
`;
    
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    padding: 0 30rem;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
      display: none;
    }
`;
    
  export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
    @media screen and (max-width: 768px) {
      display: none;
    }
`;
    
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #808080;
    }
`;