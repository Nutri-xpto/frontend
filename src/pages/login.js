import React from 'react';
import { useState } from 'react';
import './login.css';
import {NavLink} from 'react-router-dom'

function Login() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  return (
    <div className ='container'>
      <div className = 'container-login'>
        <div className ='wrap-login'>
          <form className ='login-form'>

            <span className ='login-form-logo'>
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

            <div className = 'container-login-form-btn'>
              <NavLink to = "/signup">
                <button className = 'newacc-form-btn'> Cadastro </button>
              </NavLink>
            </div>

            <div className = 'container-login-form-btn'>
              <button className = 'login-form-btn'> Login </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Login