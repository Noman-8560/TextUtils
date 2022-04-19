import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      typ:type,
    })

  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#06113C';
      showAlert("Dark mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is enable","success");
    }
  }

  return (
    <>
     <Navbar title="Textutils" title1="Home" title2="About" mode={mode} toggleMode={toggleMode} />
     <Alert  alert={alert} />
     <div className='container my-3'>
     <TextForm showAlert={showAlert} heading='Enter a Text to Analyze Below' mode={mode} />
     {/* <About/> */}
     </div>
    </>
  );
}

export default App;
