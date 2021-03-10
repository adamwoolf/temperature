import React from 'react'
import {FaSnowflake} from 'react-icons/fa'
import hotWater from '../assets/boiling.png'
const OutputDisplay = ({dynamicBgd, dynamicColor, freezing, boiling, convertedTemp, outputUnit}) => {
    return (
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
    )
}

export default OutputDisplay
