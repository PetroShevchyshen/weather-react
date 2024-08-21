import { FC } from "react";
import styles from "./DailyForecast.module.scss";
import TimeForecast from "../TimeForecast";
import { rowTitles } from "../../utilities/const/TableRowTitles";

const DailyForecast: FC = () => {
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
