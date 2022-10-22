import React from 'react';
import { useState } from 'react';
import './styles/login.css';
import {NavLink} from 'react-router-dom'

function Login() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  return (
    <div className ='container'>
      <div className = 'container-info'>
        <div className ='wrap-info'>
          <form className ='info-form'>

            <span className ='info-form-logo'>
              <img src = {'/images/logo.png'} alt = "logo"/>
            </span>

            <div className ='wrap-input'>
              <input className = {email !== "" ? 'has-val input' : 'input'} 
                     type = "email" 
                     value = {email} 
                     onChange = {e => setEmail(e.target.value)} />
              <span className ='focus-input' data-placeholder = "E-mail"></span>
            </div>

            <div className = 'wrap-input'>
              <input className = {password !== "" ? 'has-val input' : 'input'} 
                     type = "password" 
                     value = {password} 
                     onChange = {e => setPassword(e.target.value)} />
              <span className = 'focus-input' data-placeholder = "Senha"></span>
            </div>

            <div className = 'container-form-btn signup'>
              <NavLink to = "/signup">
                <button className = 'form-btn signup-btn'> Cadastro </button>
              </NavLink>
            </div>

            <div className = 'container-form-btn login'>
              <button className = 'form-btn login-btn'> Login </button>
            </div>

          </form>
        </div>

      </div>

    </div>

    

    
  )
}

export default Login