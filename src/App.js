import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Numbers from './components/Numbers';
import Calculators from './components/Calculators';
import Details from './components/Details';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { Link } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('dark');
  const [alert , setAlert] = useState(
    {
      msg : "this is light Mode",
      type : "success"
    }
  );

  const showAlert = (message, type) =>{
    setAlert({
    msg: message,
    type: type
  })
  }
  
  const changethemode = () => {
    if(mode === 'dark')
    {
       setMode('light')
       showAlert("this is light Mode", "success")
       document.title = "Light Text";
    }
    else { 
      setMode('dark') 
      showAlert("this is dark Mode", "primary")
      document.title = "Dark Text";
    }
  }
  return (
  <Router>
  <Navbar title= "TextUtilies" mode = {mode} changethemode = {changethemode}/>
  <Alert alert = {alert}/>
  {/* <Numbers/> */}
  {/* <Details/> */}
  {/* <Calculators/>  */}
   <Routes>
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Numbers" element={<Numbers/>} /> 
      <Route exact path="/Details" element={<Details/>} /> 
      <Route exact path="/Calculators" element={<Calculators/>} /> 
   </Routes>
  </Router>
  );
}

export default App;
