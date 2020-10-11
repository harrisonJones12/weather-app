import { createContext } from "react";

export const WeatherContext = createContext();

export let initialState = {
  location: "Philadelphia",
};

export let reducer = (state, action) => {
  switch (action.type) {
    case "set-location":
      return { ...state, location: action.payload };
  }
};
