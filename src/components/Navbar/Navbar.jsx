import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const icon = (iconName) => {
    return <FontAwesomeIcon icon={iconName} />;
  };

  return (
    <div className="nav-bar">
      <h1>Peekskill, NY</h1>
      {icon("chevron-down")}
      {icon("search")}
    </div>
  );
}

export default Navbar;
