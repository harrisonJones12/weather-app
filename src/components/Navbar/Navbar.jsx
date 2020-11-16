import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "components/SearchBar/SearchBar";

// import { WeatherContext } from "context/Context.js";

function Navbar({intitialLocation, getWeather, setDataLoaded}) {
  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  const [location, setLocation] = useState(intitialLocation)

  const baseClass = "nav-bar";

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-location`}>
        <h1 className={`${baseClass}-heading`}>{location}</h1>
        {icon("chevron-down", `${baseClass}-location-selector-icon`)}
      </div>
      <SearchBar getWeather={getWeather} setLocation={setLocation} location={location} setDataLoaded={setDataLoaded}/>
    </div>
  );
}

export default Navbar;
