import React from 'react'

const Inputs = ({farenheit, minC, minF, maxC, maxF, celcius, dynamicColor, handleFInput, handleCInput}) => {

    return (
        <div className="inputs" >
        <div className="num-inputs-container">

        <div className="input-box">
        <input
          value={celcius}
          onChange={handleCInput}
          name="celcius"
          type="number"
          style={{
            color: dynamicColor,
          }}
        />
        <h2>ºC</h2>
        </div>
          <div className="input-box">
          <input
          value={farenheit}
          onChange={handleFInput}
          type="number"
          name="farenheit"
          style={{
            color: dynamicColor,
          }}
        />
        <h2>ºF</h2>
        </div>
      </div>
     
      <input
        className="range-input"
        min={minC}
        max={maxC}
        type="range"
        value={celcius}
        onChange={handleCInput}
        orient="vertical"
      />
      
      </div>
    )
}

export default Inputs
