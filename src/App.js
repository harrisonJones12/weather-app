import React, { useReducer } from "react";
import "icons/fontawesome";

import Navbar from "components/Navbar/Navbar";
import NextDay from "components/NextDay/NextDay";
import Current from "components/Current/Current.jsx";

import { WeatherContext, initialState, reducer } from "context/Context.js";

function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  let value = { state, dispatch };

  return (
    <div className="App">
      <WeatherContext.Provider value={value}>
        <Navbar />
        <div className={"container"}>
          <Current />
          <NextDay />
        </div>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
