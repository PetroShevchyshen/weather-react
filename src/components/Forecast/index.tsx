import { FC } from "react";
import styles from "./Forecast.module.scss";
import ForecastCard from "../ForecastCard";
import { useAppSelector } from "../../hooks/hooks";

const Forecast: FC = () => {
  const store = useAppSelector((store) => store.forecast.forecast.forecast);

  return (
    <div className={styles.forecast}>
      {store.forecastday.map((item) => (
        <ForecastCard
          alt={item.day.condition.text}
          img={item.day.condition.icon}
          max_temp={item.day.maxtemp_c}
          min_temp={item.day.mintemp_c}
          title={item.date}
        />
      ))}
    </div>
  );
};

export default Forecast;
