import { IForecastWeather } from "./ICurrentWeather";
import { IHour } from "./IHour";

export interface IForecastDay {
  date: string;
  day: IForecastWeather;
  hour: IHour[];
}

export interface Forecast {
  forecastday: IForecastDay[];
}
