import React, { useState, useRef, useEffect } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar({getWeather, setLocation, location}) {
  const searchRef = useRef(null);
  const [isIconClicked, setIsIconClicked] = useState();

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


  const handleLocationChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    
    if(e.key === 'Enter') {
      setLocation(e.target.value);
      e.preventDefault();
      
      getWeather(location);
    }
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
