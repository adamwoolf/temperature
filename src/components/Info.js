import { FaPizzaSlice, FaRing, FaSnowflake, FaUserCheck } from 'react-icons/fa';
import hotWater from '../assets/boiling.png';

const Info = ({ celsius }) => {
    if (celsius <= 0 && celsius > -5)
        return (
            <div>
                {" "}
                <FaSnowflake size={35} color="grey" />
                Water freezes
            </div>
        );
    else if (celsius <= -30 && celsius > -35) return  (<div> Mercury Melts</div>);
    else if (celsius <= -39 && celsius > -41)
        return (
            <div>
                {" "}
                <p>At -40, celsius and farenheit are the same! </p>
            </div>
        );
    else if (celsius <= -59 && celsius > -79)
        return (
            <div>
                {" "}
                <p>The average temperature on Mars</p>{" "}
            </div>
        );
    else if (celsius <= -88 && celsius > -90)
        return (
            <div>
                {" "}
                <p>
                    The coldest temperature ever recorded on Earth <br />
                    <small>
                        It was recorded at Vostok Station located in Antarctica on July 21,
                        1983.
                    </small>{" "}
                </p>{" "}
            </div>
        );
    else if (celsius >= 37 && celsius < 38)
        return (
            <div>
                <FaUserCheck color="green" />{" "}
                <span style={{ color: "green" }}>
          The average healthy
          <br /> human body!
        </span>
            </div>
        );
    else if (celsius === 58) {
        return (
            <div>
                {" "}
                <span style={{ color: "red" }}>
          The HOTTEST temperature ever recorded on EARTH
          <br />
          <small>
            It was recorded on September 13, 1922 in Al ‘Aziziyah located in
            Libya.
          </small>
        </span>
            </div>
        );
    }
    else if (celsius >= 100 && celsius < 232)
        return (
            <div>
                {" "}
                <img src={hotWater} alt="" style={{ width: 55 }} />
                <span>Water boils</span>
            </div>
        );
    else if (celsius >= 82 && celsius < 90)
        return (
            <div>
                {" "}
                <span>Parmesan cheese starts to melt.</span>
            </div>
        );
    else if (celsius >= 232 && celsius < 245)
        return (
            <div>
                {" "}
                <span>Tin starts to melt here.</span>
            </div>
        );
    else if (celsius >= 450 && celsius < 500)
        return (
            <div>
                <FaPizzaSlice /> <span>Ideal for cooking pizza!</span>
            </div>
        );
    else if (celsius >= 660 && celsius < 961)
        return (
            <div>
                <span>Aluminium melts.</span>
            </div>
        );
    else if (celsius >= 961)
        return (
            <div>
                <FaRing /> <span>Silver melts.</span>
            </div>
        );
    else return null;
};

export default Info;