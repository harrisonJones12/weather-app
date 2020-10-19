import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "components/SearchBar/SearchBar";

import { WeatherContext } from "context/Context.js";

function Navbar({location}) {
  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  const baseClass = "nav-bar";

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-location`}>
        <h1 className={`${baseClass}-heading`}>{location}</h1>
        {icon("chevron-down", `${baseClass}-location-selector-icon`)}
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;
