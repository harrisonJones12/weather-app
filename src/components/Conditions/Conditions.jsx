import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Conditions() {
  const baseClass = "conditions-container";

  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-main-info`}>
        <div className={`${baseClass}-type-of-day-high-low`}>
          <h2 className={`${baseClass}-temperature`}>20&deg;</h2>
          <p>Sunny day</p>
          <p>26&deg; / 11&deg;</p>
        </div>
        {icon("sun", `${baseClass}-sun-icon`)}
      </div>
    </div>
  );
}

export default Conditions;
