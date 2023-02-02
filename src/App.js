import React, {useState} from 'react';
import './App.css';
import { Login } from './REQ1/Login';
import { Register } from './REQ1/Register';


function App() {
  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) =>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm} />
      }
    </div>
  );
}



export default App;