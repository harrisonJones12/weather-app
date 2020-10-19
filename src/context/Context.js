import { createContext } from "react";

export const WeatherContext = createContext();

export let initialState = {
  location: "Philadelphia",
};

export let reducer = (state, action) => {
  switch (action.type) {
    case "set-location":
      return { ...state, location: action.payload };
      case "set-fiveDayWeather":
        return {...state, fiveDayForecast: action.payload };
        case "set-currentDayWeather":
      return { ...state, currentWeather: action.payload };
  }
    
};
