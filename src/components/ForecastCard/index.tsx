import { FC } from "react";
import styles from "./ForecastCard.module.scss";
import { ForecastCardProps } from "../../utilities/Models/ForecastCardProps";

const ForecastCard: FC<ForecastCardProps> = ({
  title,
  alt,
  img,
  max_temp,
  min_temp,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
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
