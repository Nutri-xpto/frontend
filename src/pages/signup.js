import React from 'react';
import { useState } from 'react';
import './signup.css';

function SignUp() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConfirm, setPasswordConfirm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
      <div className = 'container'>
        <div className = 'container-signup'>
          <div className = 'wrap-login'>
            <form className = 'signup-form' onSubmit = {handleSubmit}>
  
              <span className = 'signup-form-logo'>
                <img src = {'/images/logo.png'} alt = "logo"/>
              </span>
                
              <div className = 'wrap-input'>
                <input className = {name !== "" ? 'has-val input' : 'input'} 
                       type = "name" 
                       value = {name} 
                       onChange = {e => setName(e.target.value)} />
                <span className = 'focus-input' data-placeholder = "Nome"></span>
              </div>
  
              <div className = 'wrap-input'>
                <input className = {email !== "" ? 'has-val input' : 'input'} 
                       type = "email" 
                       value = {email} 
                       onChange = {e => setEmail(e.target.value)} />
                <span className='focus-input' data-placeholder = "E-mail"></span>
              </div>
  
              <div className = 'wrap-input'>
                <input className = {password !== "" ? 'has-val input' : 'input'} 
                       type = "password" 
                       value = {password} 
                       onChange = {e => setPassword(e.target.value)} />
                <span className = 'focus-input' data-placeholder = "Senha"></span>
              </div>

              <div className = 'wrap-input'>
                <input className = {passwordConfirm !== "" ? 'has-val input' : 'input'} 
                       type = "password" 
                       value = {passwordConfirm} 
                       onChange = {e => setPasswordConfirm(e.target.value)} />
                <span className ='focus-input' data-placeholder = "Confirmação de Senha"></span>
              </div>
  
              <div className = 'container-signup-form-btn'>
                <button className ='signup-form-btn'> Próxima Etapa </button>
              </div>

            </form>
          </div>
        </div>
  
      </div>
    )
}

export default SignUp