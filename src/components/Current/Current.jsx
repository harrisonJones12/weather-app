import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Current({ currentWeatherDetails, weatherDetails }) {
  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  const { temp, temp_min } = currentWeatherDetails;
  const { description } = weatherDetails;

  const currentTemp = Math.floor(temp);
  const lowTemp = Math.floor(temp_min);
  // const feelsLike = Math.floor(feels_like);

  return (
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
  );
}

export default Current;
