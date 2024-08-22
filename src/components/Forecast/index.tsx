import { FC } from "react";
import styles from "./Forecast.module.scss";
import ForecastCard from "../ForecastCard";

const Forecast: FC = () => {
  return (
    <div className={styles.forecast}>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
};

export default Forecast;
