import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FORECAST_WEATHER_URL } from "../../../utilities/const/links";
import { IForecastResponse } from "../../../utilities/Interfaces/IForecastResponse";

const key = import.meta.env.VITE_API_KEY;

export const fetchCurrentForecast = createAsyncThunk(
  "forecast/fetchCurrentForecast",
  async ({ days, location }: { days: number; location: string }, thunkApi) => {
    try {
      const { data } = await axios.get<IForecastResponse>(
        `${FORECAST_WEATHER_URL}?key=${key}&q=${location}&days=${days}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
