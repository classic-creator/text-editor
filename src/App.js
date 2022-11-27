
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import React,{useState} from 'react'
import Alert from "./components/alert";
import { BrowserRouter,Route,Routes } from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert(
      { msg: message,
        type: type,}  
    )
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
  const [mode, setmode] = useState('light');
  const darkMode=()=>{
    if (mode==="light") {
      
      setmode('dark')
      document.body.style.backgroundColor='gray';
      showAlert('dark mode enabled','success')
    }
    else {
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert('light mode enabled','success')
    }

  }
  return (
    <>
    < BrowserRouter>
      <Navbar title="text editor" aboutText="about us" toggleMode={darkMode} mode={mode}/>
      <Alert alert={alert}/>
     // <div className="container">
    
    
          <Routes>
        
          <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About />}/>
            
          
           
          </Routes>
      
     // </div>
 
 </BrowserRouter>
 </>
  ); 
}

export default App;
