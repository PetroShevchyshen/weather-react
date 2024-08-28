import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { searchCountry } from "../../store/reducers/Forecast/ForecastSlice";

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const store = useAppSelector((state) => state.forecast);
  const city = store.forecast.location.name;
  const country = store.forecast.location.country;
  const blackPicture = "./pictures/Vector.png";
  const whitePicture = "./pictures/Outline.png";
  const dispatch = useAppDispatch();

  const checkTheme = () =>
    store.theme === "dark" ? whitePicture : blackPicture;

  const countryHandler = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const searchWeather = () => {
    dispatch(searchCountry(searchValue));
    setSearchValue("");
  };

  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{`${city}, ${country}`}</h3>
      <div className={styles.searchBlock}>
        <img
          className={styles.searchImg}
          src={checkTheme()}
          alt="search-image"
          onClick={() => searchWeather()}
        />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search the city"
          onChange={countryHandler}
          value={searchValue}
        />
      </div>
    </header>
  );
};

export default Header;
