import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrentForecast } from "./ActionCreators";
import { IForecastResponse } from "../../../utilities/Interfaces/IForecastResponse";
import { ForecastStore } from "../../../utilities/Models/ForecastStore";
import { theme } from "../../../utilities/enums/enums";

const initialState: ForecastStore = {
  forecast: {
    location: {
      name: "",
      region: "",
      country: "",
      tz_id: "",
    },
    current: {
      last_updated: "",
      temp_c: 0,
      condition: {
        text: "",
        icon: "",
      },
      wind_kph: 0,
      pressure_mb: 0,
      humidity: 0,
      feelslike_c: 0,
    },
    forecast: {
      forecastday: [],
    },
  },
  isLoaded: false,
  theme: "light",
  searchValue: "Vinnitsa",
  error: "",
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === theme.light ? theme.dark : theme.light;
    },
    searchCountry(state, action: PayloadAction<string>) {
      state.searchValue =
        action.payload === "" ? state.searchValue : action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentForecast.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(
        fetchCurrentForecast.fulfilled,
        (state, action: PayloadAction<IForecastResponse>) => {
          state.error = "";
          state.isLoaded = true;
          state.forecast = action.payload;
        }
      )
      .addCase(fetchCurrentForecast.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message || "Failed to fetch forecast";
      });
  },
});

export default forecastSlice.reducer;
export const { changeTheme, searchCountry } = forecastSlice.actions;
