import { FC } from "react";
import styles from "./Header.module.scss";
import { useAppSelector } from "../../hooks/hooks";

const Header: FC = () => {
  const store = useAppSelector((state) => state.forecast);
  const city = store.forecast.location.name;
  const country = store.forecast.location.country;

  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{`${city}, ${country}`}</h3>
      <div className={styles.searchBlock}>
        <img
          className={styles.searchImg}
          src="./pictures/Vector.png"
          alt="search-image"
        />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search the city"
        />
      </div>
    </header>
  );
};

export default Header;
