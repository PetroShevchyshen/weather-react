import { FC, useMemo } from "react";
import styles from "./TimeForecast.module.scss";
import { TimeForecastProps } from "../../utilities/Models/TimeForecastProps";
import dayjs from "dayjs";

const TimeForecast: FC<TimeForecastProps> = ({ data, title }) => {
  const time = useMemo(
    () => data.map((item) => dayjs(item.time).format("HH:mm")),
    [data]
  );

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.table}>
        {data.map((item, index) => (
          <div className={styles.item}>
            <span>{time[index]}</span>
            <img src={item.condition.icon} alt={item.condition.text} />
            <span>{item.temp_c}</span>
            <span>{item.feelslike_c}</span>
            <span>{item.pressure_mb}</span>
            <span>{item.humidity}</span>
            <span>{item.wind_kph}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeForecast;
