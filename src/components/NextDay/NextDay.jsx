import React, { useState, useEffect } from "react";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Current from "components/Current/Current.jsx";

function NextDay() {
  const baseClass = "next-day-forecast";

  const [currentWeather, setCurrentWeather] = useState(null);

  const apiKey = "ec4d4cf2d0df95b491df7f177eb42f95";

  useEffect(() => {
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
    fetchCurrentWeatherData();
  }, []);

  console.log(
    "current temp",
    currentWeather && Math.floor(currentWeather.main.temp)
  );

  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  console.log("response", currentWeather);

  return (
    <div className={`${baseClass}-container`}>
      <div className="weather-details">
        <Current />

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
        <div className="card">
          <h3>Monday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Tuesday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Wednsday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Thursday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Friday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextDay;
