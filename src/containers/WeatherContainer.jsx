import React, {  useState, useEffect } from "react";

import axios from "axios";

import Navbar from "components/Navbar/Navbar";
import NextDay from "components/NextDay/NextDay";
import Current from "components/Current/Current.jsx";


function WeatherContainer() {

    

    const [fiveDayForecast, setFiveDayForecast] = useState();
    const [currentWeather, setCurrentWeather] = useState();
    const intitialLocation = 'Boston';


    const getWeather = async (location) => {
      try {
        const apiKey = "ec4d4cf2d0df95b491df7f177eb42f95";

        const fiveDayWeather = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&cnt=40&APPID=${apiKey}`
        );
        const currentWeather = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apiKey}`
        );
    
        if (currentWeather.data && fiveDayWeather.data) {
          setFiveDayForecast(fiveDayWeather.data)
          setCurrentWeather(currentWeather.data)
        }
    
        // dispatch({ type: "set-currentDayWeather", payload: currentWeather});
        // dispatch({ type: "set-fiveDayWeather", payload: fiveDayWeather});
    
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getWeather(intitialLocation)
    }, [])

    // if(!state.currentWeather && !state.fiveDayForecast) {
    //   return null;
    // }

    
    return (
        <>
        <Navbar intitialLocation={intitialLocation} getWeather={getWeather} />
          <Current  currentWeatherInfo={currentWeather}/>
          <NextDay fiveDayWeatherInfo={fiveDayForecast}/>  
        </>
    )
}

export default WeatherContainer;