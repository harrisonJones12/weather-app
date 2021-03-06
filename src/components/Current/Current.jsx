import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { WeatherContext } from "context/Context.js";



function Current({currentWeatherInfo}) {
  const fontAwesomeicon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  if (!currentWeatherInfo?.main) {
    return null;
  }

  const { main, weather } = currentWeatherInfo;
console.log('main', main);
console.log('weather', weather);
  const { temp, temp_min, feels_like } = main;
  const { description, icon } = weather[0];

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
              {fontAwesomeicon("umbrella", `umbrella-icon atmosphere-conditions-icons`)}
              <p>13 mph</p>
            </div>
          </div>

          <div className="humidity">
            <p>Humidity</p>
            <div className="icon-number-group">
              {fontAwesomeicon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
              <p>{main.humidity}</p>
            </div>
          </div>
          <div className="real-feel">
            <p>Real Feel</p>
            <div className="icon-number-group">
              {fontAwesomeicon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
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
          {/* {icon("sun", "sun-icon")} */}
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt=""  />
          <p className="condition">{description}</p>
        </div>
      </div>
      {currentWeatherDetails()}
    </div>
  );
}

export default Current;
