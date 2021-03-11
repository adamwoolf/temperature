import React, { useReducer } from "react";
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
  "https://images.unsplash.com/photo-1495951863312-2a5268b2b4b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhdCUyMHJlZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
const yetMoreFire =
  "https://images.unsplash.com/photo-1612881177996-23adb4bb5a74?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGZsYW1lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const minF = -148;
const minC = -100;
const maxF = 1832;
const maxC = 1000;

const initialState = {
  fahrenheit: '',
  celsius: '',
  dynamicBgd: morning,
};

const getSkin = (celsius) => {
  try {
    const parsedCelsius = parseFloat(celsius);
    if (parsedCelsius > 300) return yetMoreFire;
    else if (parsedCelsius > 200) return moreFire;
    else if (parsedCelsius > 100) return fire;
    else if (parsedCelsius > 75) return hot;
    else if (parsedCelsius > 45) return warm;
    else if (parsedCelsius > 0) return morning;
    else return ice;
  } catch {
    return morning;
  }
};

const reducer = (state, { type, payload}) => {
  switch (type) {
    case 'fahrenheit':
      const celsius = (payload - 32) / 1.8;
      return {
        celsius,
        fahrenheit: payload,
        dynamicBgd: getSkin(celsius),
      };
    case 'celsius':
      return {
        celsius: payload,
        fahrenheit: payload * 1.8 + 32,
        dynamicBgd: getSkin(payload),
      };
    default:
      return state;
  }
};

function App() {
  const [{celsius, fahrenheit, dynamicBgd }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="contents" style={{ backgroundImage: `url(${dynamicBgd})` }}>
      <div className="info-window">
        <h1>Temperature Converter</h1>
        <div className="inputs">
          <div style={{ width: 230 }}>
            <Inputs
              celsius={celsius}
              fahrenheit={fahrenheit}
              handleCInput={({target: {value : payload }}) => dispatch({ type: 'celsius', payload})}
              handleFInput={({target: {value : payload }}) => dispatch({ type: 'fahrenheit', payload})}
              dynamicColor={`rgb(${celsius},50,${250 - celsius})`}
              minC={minC}
              maxC={maxC}
              minF={minF}
              maxF={maxF}
            />
          </div>
        </div>
        <div style={{ marginTop: 25 }}>
          <OutputDisplay
            dynamicColor={`rgb(${celsius},20,${250 - celsius})`}
            celsius={celsius}
            dynamicBgd={dynamicBgd}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
