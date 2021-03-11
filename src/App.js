import React, { useState } from "react";
import "./styles/styles.css";

import OutputDisplay from "./components/OutputDisplay";
import Inputs from "./components/Inputs";
const ice =
  "https://images.unsplash.com/photo-1549661465-2240e7f0ff18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
const morning =
  "https://images.unsplash.com/photo-1549490316-686f9b5d359f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdyZWVuJTIwdGV4dHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
const hot =
  "https://images.unsplash.com/photo-1525783826280-5a6e928544c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHdhcm18ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
const warm =
  "https://images.unsplash.com/photo-1604079681864-c6fbd7eb109c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fHJlZCUyMGJ1cm5pbmclMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
const fire =
  "https://images.unsplash.com/photo-1609378800753-6a3c08233b51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHJlZCUyMGJ1cm5pbmclMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";

const moreFire = 
"https://images.unsplash.com/photo-1574105760686-1399492ce94b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fGZsYW1lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"

const yetMoreFire = 
"https://images.unsplash.com/photo-1612881177996-23adb4bb5a74?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGZsYW1lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"


function App() {

  const [inputTemp, setInputTemp] = useState('');
  const [farenheit, setFarenheit] = useState('')
  const [celcius, setCelcius] = useState('')

  const [convertedTemp, setConvertedTemp] = useState(inputTemp * 1.8 + 32);
  const [minC, setMinC] = useState(-100);
  const [minF, setMinF] = useState(-148);
  const [maxC, setMaxC] = useState(1000);
  const [maxF, setMaxF] = useState(1832);
  const [dynamicBgd, setDynamicBgd] = useState(morning);
  const [freezing, setFreezing] = useState(false)
  const [boiling, setBoiling] = useState(false)

  const handleCelciusInput = (e) => {
      setCelcius(e.target.value)
      setFarenheit(e.target.value * 1.8 + 32)  
      manageTheme()  
      
  };

  const handleFarenheitInput = (e) => {
setFarenheit(e.target.value)
setCelcius((e.target.value - 32) / 1.8)
manageTheme()
  }

  const manageTheme = () => {
   
      if (celcius <= 0) {
        setDynamicBgd(ice);
        setFreezing(true)
      }
      if (celcius > 0 && inputTemp <= 45) {
        setDynamicBgd(morning);
        setFreezing(false)
        setBoiling(false)
      }
      if (celcius > 45 && inputTemp <= 75) {
        setDynamicBgd(warm);
        setBoiling(false)
        setFreezing(false)
      }
      if (celcius > 75 && inputTemp <= 100) {
        setDynamicBgd(hot);
        setBoiling(false)
        setFreezing(false)
      }
      if (celcius > 100) {
        setDynamicBgd(fire);
        setBoiling(true)
        setFreezing(false)
      }
      if (celcius > 200) {
        setDynamicBgd(moreFire);
        setBoiling(true)
        setFreezing(false)
      }
      if (celcius > 300) {
        setDynamicBgd(yetMoreFire);
        setBoiling(true)
        setFreezing(false)
      }
    } 
  

  


  return (
    <div className="contents" style={{ backgroundImage: `url(${dynamicBgd})` }}>
      <div className="info-window">
        <h1>Temperature Converter</h1>
        <div className="inputs" >
          <div style={{width:230}}>
        <Inputs
        celcius={celcius}
        farenheit={farenheit}
        handleCInput={handleCelciusInput}
        handleFInput={handleFarenheitInput}
        dynamicColor={`rgb(${celcius},50,${250 - celcius})`}
        minC={minC}
        maxC={maxC}
        minF={minF}
        maxF={maxF}
        />
        <div style={{marginTop:25}} >
        <OutputDisplay
        // dynamicColor={`rgb(${inputTemp},20,${250 - inputTemp})`}
        freezing={freezing}
        boiling={boiling}
        dynamicBgd={dynamicBgd}
        // inputTemp={inputTemp}
        // farenheit={farenheit}
        />
      </div>
      </div>
      
      </div>
      </div>
    </div>
  );
}

export default App;
