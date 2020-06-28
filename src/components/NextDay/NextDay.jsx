import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NextDay() {
  const baseClass = "next-day-forecast";

  const icon = (iconName, className) => {
    return <FontAwesomeIcon icon={iconName} className={className} />;
  };

  //   const daysOfTheWeek = ['Monday','Tuesday', 'Wednsday', 'Thursday', 'Friday'];

  //   const daysOfTheWeekCards = () => {
  //       return daysOfTheWeek.map((day) => {
  //           <div>
  //               <h3>Day</h3>
  //           </div>
  //       })
  //   }

  return (
    <div className={`${baseClass}-container`}>
      {/* Next day info card  */}
      <div className={`${baseClass}-next-day-info`}>
        <div className={`${baseClass}-next-day-heading`}>
          <h3 className="heading">Tomorrow</h3>
          <div className="type-of-day-high-low">
            <p>26&deg; / 11&deg;</p>
            {icon("sun", "sun-icon")}
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint facilis
          dolore saepe illum ex id, similique adipisci nam quasi. Soluta!
        </p>

        <div className={`${baseClass}-atmosphere-conditions`}>
          <div className="">
            <p>Wind</p>
            <p>13 mph</p>
          </div>
          <div className="">
            <p>Chance of rain</p>
            <p>53%</p>
          </div>
          <div className="">
            <p>Humidity</p>
            <p>13</p>
          </div>
        </div>
      </div>

      <div className={`${baseClass}-days-of-the-week-cards`}>
        <div className="card">
          <h3>Monday</h3>
          <p>26&deg; / 11&deg;</p>
        </div>
        <div className="card">
          <h3>Tuesday</h3>
          <p>26&deg; / 11&deg;</p>
        </div>
        <div className="card">
          <h3>Wednsday</h3>
          <p>26&deg; / 11&deg;</p>
        </div>
        <div className="card">
          <h3>Thursday</h3>
          <p>26&deg; / 11&deg;</p>
        </div>
      </div>
    </div>
  );
}

export default NextDay;
