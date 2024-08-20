import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Vinnytsia, Ukraine</h3>
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
