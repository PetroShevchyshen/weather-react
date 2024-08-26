import { ICurrentWeather } from "./ICurrentWeather";
import { Forecast } from "./IForecastDay";
import { ILocation } from "./ILocation";

export interface IForecastResponse {
  location: ILocation;
  current: ICurrentWeather;
  forecast: Forecast;
}
