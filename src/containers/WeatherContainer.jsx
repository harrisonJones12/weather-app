import React, {  useContext } from "react";

import Navbar from "components/Navbar/Navbar";
import NextDay from "components/NextDay/NextDay";
import Current from "components/Current/Current.jsx";

import { WeatherContext } from "context/Context.js";

import { useFetchWeather } from "./index.js";


function WeatherContainer() {

    const { state } = useContext(WeatherContext);

 const { fiveDayForecast, currentWeather } = useFetchWeather(state.location);
     
    

    return (
        <>
        <Navbar location={state.location}/>
          <Current fiveDayForecast={fiveDayForecast}/>
          <NextDay currentWeather={currentWeather}/>  
        </>
    )
}

export default WeatherContainer;