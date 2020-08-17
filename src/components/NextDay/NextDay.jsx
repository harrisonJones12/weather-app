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
            {icon("sun", "sun-icon")}
            <p>26&deg; / 11&deg;</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint facilis
          dolore saepe illum ex id, similique adipisci nam quasi. Soluta!
        </p>

        <div className={`${baseClass}-atmosphere-conditions`}>
          <div className="wind">
            <p>Wind</p>
            <div className="icon-number-group">
              {icon("umbrella", `umbrella-icon atmosphere-conditions-icons`)}
              <p>13 mph</p>
            </div>
          </div>
          <div className="chance-of-rain">
            <p>Chance of rain</p>
            <div className="icon-number-group">
              {icon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
              <p>53%</p>
            </div>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <div className="icon-number-group">
              {icon("umbrella", "umbrella-icon atmosphere-conditions-icons")}
              <p>13</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${baseClass}-days-of-the-week-cards`}>
        <div className="card">
          <h3>Monday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg; / 11&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Tuesday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg; / 11&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Wednsday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg; / 11&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Thursday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg; / 11&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Friday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg; / 11&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
        <div className="card">
          <h3>Saturday</h3>
          <div className="icon-temperature-group">
            <p className="temperature">26&deg; / 11&deg;</p>
            {icon("umbrella", "umbrella-icon days-of-the-week-card-icons")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextDay;
