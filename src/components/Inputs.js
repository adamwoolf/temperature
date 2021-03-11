import React from "react";

const Inputs = ({
  fahrenheit,
  minC,
  maxC,
  celsius,
  dynamicColor,
  handleFInput,
  handleCInput,
}) => {
  return (
    <div className="inputs">
      <div className="num-inputs-container">
        <div className="input-box">
          <input
            value={celsius}
            onChange={handleCInput}
            name="celsius"
            type="number"
            style={{
              color: dynamicColor,
            }}
          />
          <h2>ºC</h2>
        </div>
        <div className="input-box">
          <input
            value={fahrenheit}
            onChange={handleFInput}
            type="number"
            name="fahrenheit"
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
        value={celsius}
        onChange={handleCInput}
        orient="vertical"
      />
    </div>
  );
};

export default Inputs;
