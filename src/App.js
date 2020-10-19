import React, { useReducer } from "react";
import "icons/fontawesome";

import  WeatherContainer  from "containers/WeatherContainer.jsx";

import { WeatherContext, initialState, reducer } from "context/Context.js";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  let value = { state, dispatch };

  return (
    <div className="App">
      <WeatherContext.Provider value={value}>
        <div className={"container"}>
          <WeatherContainer />
        </div>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
