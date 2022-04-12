// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  
    <>
     <Navbar title="Textutils" title1="Home" title2="About" />
     <div className='container my-3'>
     <TextForm heading='Enter a Text to Analyze Below' />
     </div>
    </>


  );
}

export default App;
