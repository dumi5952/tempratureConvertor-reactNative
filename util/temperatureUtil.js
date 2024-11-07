import { temperatureUnits } from "../constants/DashboardConstants";

export const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const switchUnit = (unit) => {
  return unit === temperatureUnits.celsius
    ? temperatureUnits.fahrenheit
    : temperatureUnits.celsius;
};
