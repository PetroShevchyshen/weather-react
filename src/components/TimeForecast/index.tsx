import { FC } from "react";
import styles from "./TimeForecast.module.scss";

const TimeForecast: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Title</h3>
      <div className={styles.table}>
        <div className={styles.item}>
          <span>time</span>
          <img
            src="//cdn.weatherapi.com/weather/64x64/day/113.png"
            alt="icon"
          />
          <span>+7</span>
          <span>+7</span>
          <span>760</span>
          <span>55</span>
          <span>5</span>
        </div>
        <div className={styles.item}>
          <span>time</span>
          <img
            src="//cdn.weatherapi.com/weather/64x64/day/113.png"
            alt="icon"
          />
          <span>+7</span>
          <span>+7</span>
          <span>760</span>
          <span>55</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default TimeForecast;
