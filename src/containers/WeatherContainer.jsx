import React, {  useState, useEffect } from "react";

import ReactLoading from 'react-loading';

import axios from "axios";

import Navbar from "components/Navbar/Navbar";
import NextDay from "components/NextDay/NextDay";
import Current from "components/Current/Current.jsx";


function WeatherContainer() {

    

    const [fiveDayForecast, setFiveDayForecast] = useState();
    const [currentWeather, setCurrentWeather] = useState();
    const [dataLoaded, setDataLoaded] = useState(false)
    const intitialLocation = 'Boston';


    const getWeather = async (location) => {
      try {
        const apiKey = "ec4d4cf2d0df95b491df7f177eb42f95";

        const fiveDayWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&cnt=40&APPID=${apiKey}`
        );
        const currentWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apiKey}`
        );
    
        if (currentWeather.data && fiveDayWeather.data) {
          setFiveDayForecast(fiveDayWeather.data)
          setCurrentWeather(currentWeather.data)
          setDataLoaded(true)
        }


      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getWeather(intitialLocation)
    }, [])


    const isNight = () => {
      var date = new Date();
      return (date.getHours() > 22 || date.getHours() < 6);
    }

    const content = () => {
      if(dataLoaded) {
        return(<><Current  currentWeatherInfo={currentWeather}/>
          <NextDay fiveDayWeatherInfo={fiveDayForecast}/>  </>)
      }

      return <ReactLoading type="spin" color="#e6e6e6" height={document.documentElement.clientHeight} width={200} className="spinner" />
    }

    
    return (
        <div className={!isNight() ?  "weather-container-night"  : "weather-container-day"}>
        <Navbar intitialLocation={intitialLocation} getWeather={getWeather} setDataLoaded={setDataLoaded}/>
          {content()}
        </div>
    )
}

export default WeatherContainer;