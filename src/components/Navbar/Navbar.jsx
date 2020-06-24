import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  const baseClass = "nav-bar";

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-location`}>
        <h1 className={`${baseClass}-heading`}>Peekskill, NY</h1>
        {icon("chevron-down", `${baseClass}-location-selector-icon`)}
      </div>
      {icon("search", `${baseClass}-search-icon`)}
    </div>
  );
}

export default Navbar;
