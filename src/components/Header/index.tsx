import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  clearSearch,
  searchCountry,
} from "../../store/reducers/Forecast/ForecastSlice";
import { pictures, theme } from "../../utilities/enums/enums";
import { searchCountryData } from "../../store/reducers/Forecast/ActionCreators";
import { debounce } from "../../utilities/const/debounce";
import DropDownItem from "../DropDownItem";

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const store = useAppSelector((state) => state.forecast);
  const city = store.forecast.location.name;
  const country = store.forecast.location.country;
  const dispatch = useAppDispatch();

  const checkTheme = () =>
    store.theme === theme.dark ? pictures.whitePicture : pictures.blackPicture;

  const countryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
    debouncedDispatch(value);
  };

  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      dispatch(searchCountryData(value));
    }, 500),
    [dispatch]
  );

  const searchWeather = (search: string) => {
    dispatch(searchCountry(search));
    dispatch(clearSearch());
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
        />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search the city"
          onChange={countryHandler}
          value={searchValue}
        />
        {store.searchData.length > 0 && (
          <div className={styles.searchValue}>
            {store.searchData.map((item) => (
              <DropDownItem
                key={item.id}
                {...item}
                searchFunction={searchWeather}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
