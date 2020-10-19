import { useContext, useState, useEffect } from "react";

import axios from "axios";

import { WeatherContext } from "context/Context.js";

const apiKey = "ec4d4cf2d0df95b491df7f177eb42f95";

// export const useFetchCurrentWeatherData = async (location) => {

//   const { dispatch } = useContext(WeatherContext);
  
//   try {
    
//     const result = await axios.get(
//       `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apiKey}`
//     );

//     if (result.data) {
      
//       dispatch({ type: "set-fiveDayWeather", payload: result.data });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const useFetchFiveDayForecastData = async (location) => {
//   const { dispatch } = useContext(WeatherContext);
      
      
  
//   try {
//     const result = await axios.get(
//       `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&cnt=40&APPID=${apiKey}`
//     );

//     if (result.data) {
//       dispatch({ type: "set-currentDayWeather", payload: result.data });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };




export const useFetchWeather = (location) => {

  const [fiveDayForecast, setFiveDayForecast] = useState()
  const [currentWeather, setCurrentWeather] = useState()

  const { state, dispatch } = useContext(WeatherContext);


  useEffect( () => {
    (async () => {try {
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
  
      dispatch({ type: "set-currentDayWeather", payload: currentWeather});
      dispatch({ type: "set-fiveDayWeather", payload: fiveDayWeather});
  
    } catch (error) {
      console.log(error);
    }})();
  //Fetches five day weather and current weather
  
        
    
}, [state.location])

return[fiveDayForecast, currentWeather]

}

