import { createContext } from "react";

export const WeatherContext = createContext();

export let initialState = {};

export let reducer = (action) => {
  switch (action.type) {
    case "set-location":
      return { response: action.payload };
  }
};
