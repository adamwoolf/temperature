import React from 'react'

const Inputs = ({inputTemp, handleInput, toggleUnit, min, max}) => {
    return (
        <>
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
      </>
    )
}

export default Inputs
