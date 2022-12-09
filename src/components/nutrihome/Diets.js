import React from 'react'
import { useState } from "react";
import '../styles/diet.css';
import TextField from "@mui/material/TextField";
import List from "../../components/dummies/List";


export default function Diets() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className='cont-diets'>
        <div className='cont-patient-record'>
          <div className= 'scroll-search'>
            <TextField
              id= "outlined-basic"
              onChange = {inputHandler}
              variant= "outlined"
              fullWidth
              label= "Selecione o paciente"
            />
          </div>
          <List input = {inputText} />
        </div>

        <div className='cont-patient-diet'>
           <div className='diet-details'>
                <div class="dropdown">
                  <p class="dropbtn">Segunda-Feira</p>
                  <div class="dropdown-content">
                    <div class="row">
                      <div class="diet-column">
                        <p>Horário</p>
                        <a href="#">8:00</a>
                        <a href="#">10:00</a>
                        <a href="#">12:00</a>
                        <a href="#">16:00</a>
                        <a href="#">18:00</a>
                        <a href="#">22:00</a>
                      </div>

                      <div class="diet-column">
                        <p>Nome</p>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>

                      <div class="diet-column">
                        <p>Receita</p>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>

                      <div class="diet-column">
                        <p>Preparo</p>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

