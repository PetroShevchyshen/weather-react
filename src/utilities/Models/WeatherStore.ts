import { ICurrentWeatherResponse } from "../Interfaces/ICurrentWeatherResponse";

export interface WeatherStore {
  weather: ICurrentWeatherResponse;
  isLoading: boolean;
  error: string;
}
