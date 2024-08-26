import { FC, useCallback } from "react";
import styles from "./DailyForecast.module.scss";
import TimeForecast from "../TimeForecast";
import { rowTitles } from "../../utilities/const/TableRowTitles";
import { useAppSelector } from "../../hooks/hooks";

import { IHour } from "../../utilities/Interfaces/IHour";
import { timeArray } from "../../utilities/const/TimeArray";

const DailyForecast: FC = () => {
  const { isLoaded, forecast } = useAppSelector((state) => state.forecast);

  const filteredObjects = useCallback((): IHour[] | undefined => {
    if (!isLoaded) {
      return;
    }

    const data = forecast.forecast.forecastday[0].hour;

    return data.filter((obj) => {
      const timePart = obj.time.slice(11);
      return timeArray.includes(timePart);
    });
  }, [isLoaded, forecast]);

  console.log(filteredObjects());
  return (
    <div className={styles.wrapper}>
      <div className={styles.rowTitles}>
        {rowTitles.map((item) => (
          <span>{item}</span>
        ))}
      </div>

      <TimeForecast />
      <TimeForecast />
      <TimeForecast />
      <TimeForecast />
    </div>
  );
};

export default DailyForecast;
