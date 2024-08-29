import { ICurrentWeather } from "./ICurrentWeather";
import { ILocation } from "./ILocation";

export interface ICurrentWeatherResponse {
  location: ILocation;
  current: ICurrentWeather;
}
