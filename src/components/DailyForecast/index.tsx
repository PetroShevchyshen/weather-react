import { FC, useCallback } from "react";
import styles from "./DailyForecast.module.scss";
import TimeForecast from "../TimeForecast";
import { rowTitles } from "../../utilities/const/TableRowTitles";
import { useAppSelector } from "../../hooks/hooks";

import { IHour } from "../../utilities/Interfaces/IHour";
import { timeArray } from "../../utilities/const/TimeArray";
import { DayTimeTitles } from "../../utilities/const/DayTimeTitles";

const DailyForecast: FC = () => {
  const { isLoaded, forecast } = useAppSelector((state) => state.forecast);

  const filteredData = useCallback(() => {
    if (!isLoaded) {
      return;
    }

    const data = forecast.forecast.forecastday[0].hour;

    return data.filter((obj) => {
      const timePart = obj.time.slice(11);
      return timeArray.includes(timePart);
    });
  }, [isLoaded, forecast]);

  const separateData = useCallback(() => {
    if (isLoaded) {
      const data = filteredData();
      const splitArray: IHour[][] = [];
      data?.forEach((item, index) => {
        if (index % 2 === 0) {
          splitArray.push([item]);
        } else {
          splitArray[splitArray.length - 1].push(item);
        }
      });
      return splitArray;
    }
  }, [isLoaded]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.rowTitles}>
        {rowTitles.map((item) => (
          <span>{item}</span>
        ))}
      </div>
      {separateData()?.map((item, index) => (
        <TimeForecast data={item} title={DayTimeTitles[index]} />
      ))}
    </div>
  );
};

export default DailyForecast;
