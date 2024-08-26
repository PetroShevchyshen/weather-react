import { IForecastResponse } from "../Interfaces/IForecastResponse";

export interface ForecastStore {
  forecast: IForecastResponse;
  isLoaded: boolean;
  error: string;
}
