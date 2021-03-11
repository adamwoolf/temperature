import React from 'react'
import {FaSnowflake} from 'react-icons/fa'
import hotWater from '../assets/boiling.png'
const OutputDisplay = ({
     dynamicBgd, freezing, boiling}) => {
    return (
        <div
          className="output-display"
          style={{ backgroundImage: `url(${dynamicBgd})` }}
        >
          <div className="output-info" >
                    <div className="output-icons" >
                    {freezing &&  <FaSnowflake size={35} color="grey"/>}
                    {boiling && <img src={hotWater} alt="" style={{width:55}}/>}
                    </div>
                </div>
        </div>
    )
}

export default OutputDisplay
