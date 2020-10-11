import React, { useState, useEffect, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { WeatherContext } from "context/Context.js";

import axios from "axios";

function Current() {
  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  const [currentWeather, setCurrentWeather] = useState({});

  const { state } = useContext(WeatherContext);

  const apiKey = "ec4d4cf2d0df95b491df7f177eb42f95";

  const fetchCurrentWeatherData = async () => {
    try {
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${state.location}&units=imperial&APPID=${apiKey}`
      );

      if (result.data) {
        setCurrentWeather(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrentWeatherData();
  }, []);

  if (!currentWeather.main) {
    return null;
  }

  const { main, weather } = currentWeather;

  const { temp, temp_min, feels_like } = main;
  const { description } = weather[0];

  const currentTemp = Math.floor(temp);
  const lowTemp = Math.floor(temp_min);
  const feelsLike = Math.floor(feels_like);
  // const feelsLike = Math.floor(feels_like);

  const currentWeatherDetails = () => {
    return (
      <div className={"current-day-info"}>
        <div className={"current-day-heading"}>
          <h3 className="heading">Weather Details</h3>
        </div>

        <div className={"current-atmosphere-conditions"}>
          <div className="wind">
            <p>Wind</p>
            <div className="icon-number-group">
              {icon("umbrella", `umbrella-icon atmosphere-conditions-icons`)}
              <p>13 mph</p>
            </div>
          </div>

          <div className="humidity">
            <p>Humidity</p>
            <div className="icon-number-group">
              {icon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
              <p>{main.humidity}</p>
            </div>
          </div>
          <div className="real-feel">
            <p>Real Feel</p>
            <div className="icon-number-group">
              {icon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
              <p className="real-feel">{feelsLike}&deg;</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="current-weather-details">
      <div className="current">
        <div className="current-temp-group">
          <h1 className="current-temp">{`${currentTemp}`}&deg;</h1>
          <div className="current-temp-details">
            <p className="low-temp">{`low ${lowTemp}`}&deg;</p>
          </div>
        </div>
        <div className="current-temp-icon-group">
          {icon("sun", "sun-icon")}
          <p className="condition">{description}</p>
        </div>
      </div>
      {currentWeatherDetails()}
    </div>
  );
}

export default Current;
