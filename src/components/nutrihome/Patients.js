import { useState } from "react";
import '../styles/patient.css';
import TextField from "@mui/material/TextField";
import List from "../../components/dummies/List";



function Patients() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    return (
      <div className='cont-patients'>
        <div className='cont-patient-list'>
          <div className= 'search'>
            <TextField
              id= "outlined-basic"
              onChange = {inputHandler}
              variant= "outlined"
              fullWidth
              label= "Selecione o Paciente"
            />
          </div>
          <List input = {inputText} />
        </div>
        <div className='cont-patient-data'>
          <div className="patient-details">
            <h1>TESTANDO</h1>
          </div>
        </div>
      </div>
    )
}

export default Patients