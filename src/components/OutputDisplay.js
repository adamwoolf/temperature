import React from 'react'
import {FaSnowflake, FaGlobe, FaPizzaSlice, FaPlaneDeparture, FaRing} from 'react-icons/fa'
import hotWater from '../assets/boiling.png'
const OutputDisplay = ({
     dynamicBgd, dynamicColor, celcius}) => {

        let info;
        if(celcius <= 0 && celcius > -30) info =<div> <FaSnowflake size={35} color="grey"/>Water freezes</div>
        if(celcius <= 30 && celcius > -60) info =<div> Mercury Melts</div>
        if(celcius < -60) info = <p>The average temperature on Mars</p> 
        if(celcius >= 100 && celcius < 232) info = <div> <img src={hotWater} alt="" style={{width:55}}/><span>Water boils</span></div>
        if(celcius >= 82 && celcius < 90) info = <div> <span>Parmesan cheese starts to melt</span></div>
        if(celcius >= 232 && celcius < 245) info = <div> <span>Tin starts to melt here</span></div>
        if(celcius >= 450 && celcius < 500) info = <div><FaPizzaSlice/> <span>Ideal for cooking pizza!</span></div>
        if(celcius >= 660 && celcius < 961) info = <div><FaPlaneDeparture/> <span>Aluminium's melting point</span></div>
        if(celcius >= 961) info = <div><FaRing/> <span>Silver's melting point.</span></div>
        

    return (
        <div
          className="output-display"
          style={{ backgroundImage: `url(${dynamicBgd})` }}
        >
            { celcius !== '' &&
             <div className="output-info" >
                    <div className="output-icons" style={{color: dynamicColor}} >
                        {info}
                    </div>
             </div>
     }
        </div>
    )
}

export default OutputDisplay
