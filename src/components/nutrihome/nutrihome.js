import React from 'react'
import '../styles/nutrihome.css';


function NutriHome(){

    return (
      <div className='cont-nutri'>
        <div className='cont-nutri-inf'>
          <div className= 'wrp-nutri-info'>
            <span className = 'icon'>
                <img src = {'/images/user_icon.png'} alt = "icon"/>
            </span>
            
            <div className='data'>
              <h1 className='head-text'>Dr. Nome do Nutricionista</h1>
              <p className='parag'>nutricionista@email.com</p>
            </div>

            <div className = 'container-btn signup'>
                  <button className = 'nutri-btn quit-btn'> Sair </button>
              </div>
  
              <div className = 'container-btn login'>
                <button className = 'nutri-btn edit-btn'> Editar Perfil </button>
              </div>
          </div>

          <div className='wrp-nutri-info details'>
            <div className='details-data'>
              <p className='detail'>Total de Pacientes </p>
              <p className= 'detail'>Total de Dietas  </p>
            </div>
          </div>

          <div className='wrp-nutri-info work'>
            <div className='details-data'> 
              <h1 className='head-text'> Sua Agenda </h1>
              <p className='parag parag-bord'></p>
              <p className='parag parag-bord'></p>
              <p className='parag parag-bord'></p>
              <p className='parag parag-bord'></p>
            </div>
          </div>

          <div className='wrp-m-info patient'>
            <span className='patients'>Seus Pacientes</span>
          </div>
          <div className='wrp-m-info patient-options'>

          </div>

          <div className='wrp-m-info diet'>
            <span className='patients'>Dietas</span>
          </div>

          <div className='wrp-m-info diet-options'>

          </div>

          <div className='wrp-m-info chat'>
            <span className='patients'>Chat</span>
          </div>

        </div>
      </div>
          )
  
}

export default NutriHome