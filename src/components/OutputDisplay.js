import React from 'react'
import {FaSnowflake, FaUserCheck, FaPizzaSlice, FaPlaneDeparture, FaRing} from 'react-icons/fa'
import hotWater from '../assets/boiling.png'
const OutputDisplay = ({
     dynamicBgd, dynamicColor, celcius}) => {

        let info;
        if(celcius <= 0 && celcius > -5) info =<div> <FaSnowflake size={35} color="grey"/>Water freezes</div>
        if(celcius <= -30 && celcius > -35) info = <div> Mercury Melts</div>
        if(celcius <= -39 && celcius > -41) info = <div> <p>At -40, celcius and farenheit are the same! </p></div>
        if(celcius <= -59 && celcius > -79) info = <div> <p>The average temperature on Mars</p> </div>
        if(celcius <= -88 && celcius > -90) info = <div> <p>The coldest temperature ever recorded on Earth <br/><small>It was recorded at Vostok Station located in Antarctica on July 21, 1983.</small> </p> </div>
        if(celcius >= 37 && celcius < 38) info = <div><FaUserCheck color="green"/> <span style={{color:'green'}} >The average healthy<br/> human body!</span></div>
        if(celcius === 58){ info = <div> <span style={{color:'red'}} >The HOTTEST temperature ever recorded on EARTH<br/>
        <small>It was recorded on September 13, 1922 in Al ‘Aziziyah located in Libya.</small></span></div>}
        if(celcius >= 100 && celcius < 232) info = <div> <img src={hotWater} alt="" style={{width:55}}/><span>Water boils</span></div>
        if(celcius >= 82 && celcius < 90) info = <div> <span>Parmesan cheese starts to melt.</span></div>
        if(celcius >= 232 && celcius < 245) info = <div> <span>Tin starts to melt here.</span></div>
        if(celcius >= 450 && celcius < 500) info = <div><FaPizzaSlice/> <span>Ideal for cooking pizza!</span></div>
        if(celcius >= 660 && celcius < 961) info = <div><span>Aluminium melts.</span></div>
        if(celcius >= 961) info = <div><FaRing/> <span>Silver melts.</span></div>
        

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
