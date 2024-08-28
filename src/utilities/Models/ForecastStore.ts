import { IForecastResponse } from "../Interfaces/IForecastResponse";

export interface ForecastStore {
  forecast: IForecastResponse;
  isLoaded: boolean;
  theme: string;
  searchValue: string;
  error: string;
}
