import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      typ:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#151D3B';
      showAlert("Dark mode is enable","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is enable","success");
      document.title="TextUtils - Light Mode";
    }
  }

  
  return (
    <>
    <Router>
     <Navbar title="Textutils" title1="Home" title2="About" mode={mode} toggleMode={toggleMode} />
     <Alert  alert={alert} />
     <div className='container my-3'>
        <Switch>
              <Route path="/about">
                <About />
              </Route>
              
              <Route path="/">
              <TextForm showAlert={showAlert} heading='Enter a Text to Analyze Below' mode={mode} />
              </Route>
        </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;

