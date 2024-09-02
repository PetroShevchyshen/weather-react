import { IForecastResponse } from "../Interfaces/IForecastResponse";
import { SearchResponse } from "./SearchRespons";

export interface ForecastStore {
  forecast: IForecastResponse;
  isLoaded: boolean;
  theme: string;
  searchValue: string;
  searchData: SearchResponse;
  error: string;
}
