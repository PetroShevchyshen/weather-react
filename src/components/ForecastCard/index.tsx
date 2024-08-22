import { FC } from "react";
import styles from "./ForecastCard.module.scss";
const ForecastCard: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3 className={styles.title}>Title</h3>
        <span>Sub title</span>
      </div>
      <div className={styles.weatherBlock}>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="icon" />
        <div className={styles.temperature}>
          <span>+16°</span>
          <span>+11°</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
