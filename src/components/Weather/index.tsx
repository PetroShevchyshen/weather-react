import { FC, useEffect } from "react";
import styles from "./Weather.module.scss";
import DailyForecast from "../DailyForecast";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCurrentForecast } from "../../store/reducers/Forecast/ActionCreators";

const Weather: FC = () => {
  const { error, isLoaded, forecast } = useAppSelector(
    (state) => state.forecast
  );
  return (
    <section className={styles.weather}>
      <div className={styles.content}>
        <h3 className={styles.title}>{forecast.current.last_updated}</h3>
        <div className={styles.weatherInfo}>
          <div className={styles.weatherPreview}>
            <img
              className={styles.weatherPreviewImg}
              src={forecast.current.condition.icon}
              alt={forecast.current.condition.text}
            />
            <p className={styles.temperature}>{forecast.current.temp_c}°C</p>
          </div>
          <div className={styles.s}>
            <DailyForecast />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
