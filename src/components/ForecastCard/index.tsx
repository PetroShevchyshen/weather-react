import { FC } from "react";
import styles from "./ForecastCard.module.scss";
import { ForecastCardProps } from "../../utilities/Models/ForecastCardProps";
import dayjs from "dayjs";

const ForecastCard: FC<ForecastCardProps> = ({
  date,
  alt,
  img,
  max_temp,
  min_temp,
}) => {
  const day = dayjs(date).format("ddd");
  const dayOfWeekend = dayjs(date).format("DD MMMM");
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3 className={styles.title}>{day}</h3>
        <span>{dayOfWeekend}</span>
      </div>
      <div className={styles.weatherBlock}>
        <img src={img} alt={alt} />
        <div className={styles.temperature}>
          <span>{max_temp}°</span>
          <span>{min_temp}°</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
