import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import {FaSnowflake} from 'react-icons/fa'
import hotWater from './assets/boiling.png'
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

function App() {
  const [inputUnit, setInputUnit] = useState("C");
  const [outputUnit, setOutputUnit] = useState("F");
  const [inputTemp, setInputTemp] = useState(0);
  const [convertedTemp, setConvertedTemp] = useState(inputTemp * 1.8 + 32);
  const [min, setMin] = useState(-100);
  const [max, setMax] = useState(1000);
  const [dynamicBgd, setDynamicBgd] = useState(morning);
  const [dynamicColor, setDynamicColor] = useState("black");
  const [freezing, setFreezing] = useState(false)
  const [boiling, setBoiling] = useState(false)

  const handleInput = (e) => {
    setInputTemp(+e.target.value);
    let tempToConvert = inputTemp;
    if (inputUnit === "C") {
      setConvertedTemp(tempToConvert * 1.8 + 32);
      if (inputTemp <= 0) {
        setDynamicColor("blue");
        setDynamicBgd(ice);
        setFreezing(true)
      }
      if (inputTemp > 0 && inputTemp <= 45) {
        setDynamicColor("green");
        setDynamicBgd(morning);
        setFreezing(false)
      }
      if (inputTemp > 45 && inputTemp <= 75) {
        setDynamicColor("yellow");
        setDynamicBgd(warm);
        setBoiling(false)
      }
      if (inputTemp > 75 && inputTemp <= 100) {
        setDynamicColor("gold");
        setDynamicBgd(hot);
        setBoiling(false)
      }
      if (inputTemp > 100) {
        setDynamicColor("red");
        setDynamicBgd(fire);
        setBoiling(true)
      }
    } else {
      setConvertedTemp((tempToConvert - 32) / 1.8);
      if (convertedTemp <= 0) {
        setDynamicColor("blue");
        setDynamicBgd(ice);
        setFreezing(true)
      }
      if (convertedTemp > 0 && convertedTemp <= 45) {
        setDynamicColor("green");
        setDynamicBgd(morning);
        setFreezing(false)
      }
      if (convertedTemp > 45 && convertedTemp <= 75) {
        setDynamicColor("yellow");
        setDynamicBgd(warm);
        setBoiling(false)

      }
      if (convertedTemp > 75 && convertedTemp <= 100) {
        setDynamicColor("orange");
        setDynamicBgd(hot);
        setBoiling(false)

      }
      if (convertedTemp > 100) {
        setDynamicColor("red");
        setDynamicBgd(fire);
        setBoiling(true)

      }
    }
  };

  const toggleUnit = () => {
    const currentInput = inputTemp;
    const currentConverted = convertedTemp;
    if (inputUnit === "C") {
      setInputUnit("F");
      setOutputUnit("C");
      setConvertedTemp(currentInput);
      setInputTemp(+currentConverted.toFixed(2));
    } else {
      setInputUnit("C");
      setOutputUnit("F");
      setConvertedTemp(currentInput);
      setInputTemp(+currentConverted.toFixed(2));
    }
  };

  return (
    <div className="contents" style={{ backgroundImage: `url(${dynamicBgd})` }}>
      <div className="info-window">
        <h1>Temperature Converter</h1>
        <div className="input-box">
          <input
            className="number-input"
            value={inputTemp}
            onChange={handleInput}
            type="number"
          />
          <div class="toggle-switch">
            <input
              onChange={toggleUnit}
              type="checkbox"
              class="toggle-switch-checkbox"
              name="toggleSwitch"
              id="toggleSwitch"
            />
            <label class="toggle-switch-label" for="toggleSwitch">
              <span class="toggle-switch-inner"></span>
              <span class="toggle-switch-switch"></span>
            </label>
          </div>
        </div>
        <hr />
        <input
          className="range-input"
          min={min}
          max={max}
          type="range"
          value={inputTemp}
          onChange={handleInput}
        />
<div className="input-display" >
       
          <>
            <h2>
              {inputTemp.toFixed(1)} º{inputUnit}
            </h2>
          </>
     
        </div>
        <div
          className="output-display"
          style={{ backgroundImage: `url(${dynamicBgd})` }}
        >
          <div className="output-info" >
                    <div className="output-icons" >
                    {freezing &&  <FaSnowflake size={35} color="white"/>}
                    {boiling && <img src={hotWater} alt="" style={{width:55}}/>}
                    </div>
            <h4
              style={{
                color: dynamicColor,
              }}
            >
                {convertedTemp.toFixed(1)}º{outputUnit}
            </h4>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
