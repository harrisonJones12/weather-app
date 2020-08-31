import React, { useState, useEffect } from "react";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Current from "components/Current/Current.jsx";

function NextDay() {
  const baseClass = "next-day-forecast";

  const [currentWeather, setCurrentWeather] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});

  const apiKey = "ec4d4cf2d0df95b491df7f177eb42f95";

  const fetchCurrentWeatherData = async () => {
    try {
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=Peekskill&units=imperial&APPID=${apiKey}`
      );

      if (result.data) {
        setCurrentWeather(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFiveDayForecastData = async () => {
    try {
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Peekskill&units=imperial&cnt=40&APPID=${apiKey}`
      );

      if (result.data) {
        setFiveDayForecast(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrentWeatherData();
    fetchFiveDayForecastData();
  }, []);

  if (!currentWeather.main || !fiveDayForecast.list) {
    return null;
  }

  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  const { main, weather } = currentWeather;

  // console.log("response", main);

  console.log(fiveDayForecast.list);

  // const formatedDate = fiveDayForecast.list[0].dt_txt.substring(0, 10);

  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][dayOfWeek];
  }

  const foreCastCards = () => {
    fiveDayForecast.list.map((day) => {
      const formatedDate = day.dt_txt.substring(0, 10);

      console.log(getDayOfWeek(formatedDate));

      return (
        <div className="card" key={day}>
          <h3>{getDayOfWeek(formatedDate)}</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={`${baseClass}-container`}>
      <div className="weather-details">
        <Current currentWeatherDetails={main} weatherDetails={weather[0]} />

        {/* Next day info card  */}
        <div className={`${baseClass}-next-day-info`}>
          <div className={`${baseClass}-next-day-heading`}>
            <h3 className="heading">Weather Details</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            facilis dolore saepe illum ex id, similique adipisci nam quasi.
            Soluta!
          </p>

          <div className={`${baseClass}-atmosphere-conditions`}>
            <div className="wind">
              <p>Wind</p>
              <div className="icon-number-group">
                {icon("umbrella", `umbrella-icon atmosphere-conditions-icons`)}
                <p>13 mph</p>
              </div>
            </div>
            <div className="chance-of-rain">
              <p>Chance of rain</p>
              <div className="icon-number-group">
                {icon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
                <p>53%</p>
              </div>
            </div>
            <div className="humidity">
              <p>Humidity</p>
              <div className="icon-number-group">
                {icon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
                <p>13</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${baseClass}-days-of-the-week-cards`}>
        {foreCastCards()}
      </div>
    </div>
  );
}

export default NextDay;
