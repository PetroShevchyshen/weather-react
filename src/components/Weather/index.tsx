import { FC } from "react";
import styles from "./Weather.module.scss";
import DailyForecast from "../DailyForecast";

const Weather: FC = () => {
  return (
    <section className={styles.weather}>
      <div className={styles.content}>
        <h3 className={styles.title}>14 October, 2024 11:30</h3>
        <div className={styles.weatherInfo}>
          <div className={styles.weatherPreview}>
            <img
              className={styles.weatherPreviewImg}
              src="//cdn.weatherapi.com/weather/64x64/day/113.png"
              alt="weather"
            />
            <p className={styles.temperature}>+16°C</p>
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
