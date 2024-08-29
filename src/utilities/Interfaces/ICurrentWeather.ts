import { ICondition } from "./ICondition";

export interface ICurrentWeather {
  last_updated: string;
  temp_c: number;
  condition: ICondition;
  wind_kph: number;
  pressure_mb: number;
  humidity: number;
  feelslike_c: number;
}

export interface IForecastWeather {
  maxtemp_c: number;
  mintemp_c: number;
  condition: ICondition;
}
