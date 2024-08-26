import { ICurrentWeather } from "./ICurrentWeather";

export interface IHour extends ICurrentWeather {
  time: string;
}
