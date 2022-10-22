import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './styles/login.css';

function SignUp() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConfirm, setPasswordConfirm] = useState("");
    const[code, setCode] = useState("");
    const[education, setEducation] = useState("");
    const[clinic_address, setClinicAddress] = useState("");
    const[additional_info, setAddInfo] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const ref = useRef(null);

    const reff = useRef(null);

    const scrollDown = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const scrollUp = () => {
      reff.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
      <div className = 'container'>
        <div ref={reff} className = 'container-info register'>
          <div className = 'wrap-info'>
            <form className = 'info-form' onSubmit = {handleSubmit}>
  
              <span className = 'info-form-logo'>
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
  
              <div className = 'container-form-btn next'>
                <button onClick = {scrollDown} className ='form-btn next-btn'> Próxima Etapa </button>
              </div>
            </form>
            <div className='container-dot'>
              <span class="dot active"></span>
              <span class="dot inactive"></span>
            </div>
          </div>
        </div>

        <div ref = {ref} className='container-info'>
          <div className = 'wrap-info'>

            <span className = 'info-form-logo'>
              <img src = {'/images/logo.png'} alt = "logo"/>
            </span>

            <div className = 'wrap-input'>
              <input className = {code !== "" ? 'has-val input' : 'input'} 
                          type = "code" 
                          value = {code} 
                          onChange = {e => setCode(e.target.value)} />
              <span className = 'focus-input' data-placeholder = "Código do Nutricionista"></span>
            </div>

            <div className = 'wrap-input'>
              <input className = {education !== "" ? 'has-val input' : 'input'} 
                          type = "education" 
                          value = {education} 
                          onChange = {e => setEducation(e.target.value)} />
              <span className = 'focus-input' data-placeholder = "Formação"></span>
            </div>

            <div className = 'wrap-input'>
              <input className = {clinic_address !== "" ? 'has-val input' : 'input'} 
                          type = "clinic_address" 
                          value = {clinic_address} 
                          onChange = {e => setClinicAddress(e.target.value)} />
              <span className = 'focus-input' data-placeholder = "Endereço do Consultório"></span>
            </div>

            <div className = 'wrap-input'>
              <input className = {additional_info !== "" ? 'has-val input' : 'input'} 
                          type = "additional_info" 
                          value = {additional_info} 
                          onChange = {e => setAddInfo(e.target.value)} />
              <span className = 'focus-input' data-placeholder = "Informações Adicionais"></span>
            </div>

            <div className = 'container-form-btn back'>
                <button onClick = {scrollUp} className = 'form-btn back-btn'> Voltar </button>
            </div>

            <div className = 'container-form-btn finish'>
              <button className = 'form-btn finish-btn'> Finalizar Cadastro </button>
            </div>
            <div className='container-dot'>
              <span class="dot inactive"></span>
              <span class="dot active"></span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SignUp