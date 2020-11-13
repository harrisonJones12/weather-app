import React, { useState, useRef, useEffect } from "react";

// import { WeatherContext } from "context/Context.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar({getWeather, setLocation, location}) {
  const searchRef = useRef(null);
  const [isIconClicked, setIsIconClicked] = useState();
  // const [weatherlocation, setWeatherLocation] = useState();

  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsIconClicked(false);
      const input = document.querySelector("input");
      input.value = "";
    }
  };

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const searchClick = () => {
    setIsIconClicked(true);
  };

  // const { dispatch } = useContext(WeatherContext);

  const handleLocationChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    
    if(e.key === 'Enter') {
      e.preventDefault();
      
      getWeather(location);
    }
    // dispatch({ type: "set-location", payload: location });
  };
  return (
    <div className="search" onClick={() => searchClick()} ref={searchRef}>
      {icon("search", "search-icon")}
      <form>
        <input
          type="text"
          className={isIconClicked ? "search-input-active" : "search-input"}
          name="search"
          onChange={(e) => handleLocationChange(e)}
          onKeyDown={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
