import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Current() {
  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  return (
    <div className="current">
      <div className="current-temp-group">
        <h1 className="current-temp">75&deg;</h1>
        <div className="current-temp-details">
          <p className="low-temp">low 60&deg;</p>
          <p className="real-feel">feels like 70&deg;</p>
        </div>
      </div>
      <div className="current-temp-icon-group">
        {icon("sun", "sun-icon")}
        <p className="condition">sunny</p>
      </div>
    </div>
  );
}

export default Current;
