// import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import React, {useState} from "react";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type : type
    })
  }

const togglemode =  () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'black';
    setTimeout(()=>{
      showAlert("Dark mode is successfully enabled","success");

    },1000)
    document.title = "Textutils-Dark Mode"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is successfully enabled","success");
    document.title = "Textutils-Light Mode"

  }
}
  return (
    <>
     <Router>

      <Navbar title="text utils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About/>} />
           {/* <About/>
          </Route> */}

          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />

      </Routes>
      </div>
      </Router>

    </>
  );
}

export default App;
