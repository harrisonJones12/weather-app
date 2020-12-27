import React from "react";

// import axios from "axios";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NextDay({fiveDayWeatherInfo}) {
  const baseClass = "next-day-forecast";

  // const [fiveDayForecast, setFiveDayForecast] = useState({});

  // const apiKey = "ec4d4cf2d0df95b491df7f177eb42f95";

  // const fetchFiveDayForecastData = async () => {
  //   try {
  //     const result = await axios.get(
  //       `http://api.openweathermap.org/data/2.5/forecast?q=Peekskill&units=imperial&cnt=40&APPID=${apiKey}`
  //     );

  //     if (result.data) {
  //       setFiveDayForecast(result.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchFiveDayForecastData();
  // }, []);

  if (!fiveDayWeatherInfo?.list) {
    return null;
  }


  
  // const nextDayFontAwesomeIcon = (iconName, className) => {
  //   return <FontAwesomeIcon icon={iconName} className={className} />;
  // };

  // console.log("response", main);

  // console.log(fiveDayForecast.list);

  // const formatedDate = fiveDayForecast.list[0].dt_txt.substring(0, 10);

  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][dayOfWeek];
  }

  const dailyData = fiveDayWeatherInfo.list.filter((reading) => {
    return reading.dt_txt.includes("03:00:00");
  });

  // console.log(dailyData);

  // for (var i = 0; i < fiveDayForecast.list.length; i += 8) {
  //   console.log(fiveDayForecast.list[i].dt_txt);
  // }

  const foreCastCards = () => {
    return dailyData.map((day, index) => {
      const formatedDate = day.dt_txt.substring(0, 10);

      const { main, weather } = day;
      console.log('nextDay', weather);



      const forecastTemp = Math.floor(main.temp);

      // console.log(day);
      return (
        <div className="card" key={index}>
          <h3>{getDayOfWeek(formatedDate)}</h3>
          <div className="icon-temperature-group">
            <p className="temperature">{forecastTemp}&deg;</p>
            {/* {nextDayFontAwesomeIcon("umbrella", "umbrella-icon days-of-the-week-card-icons")} */}
            <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt=""  className="umbrella-icon days-of-the-week-card-icons" />
          </div>
        </div>
      );
    });
  };

  // const { main, weather } = currentWeather;

  // const feelsLike = Math.floor(main.feels_like);

  return (
    <div className={`${baseClass}-days-of-the-week-cards`}>
      {foreCastCards()}
    </div>
  );
}

export default NextDay;
