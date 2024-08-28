import { FC, useEffect } from "react";

import styles from "./Home.module.scss";

import Header from "../../components/Header";
import Weather from "../../components/Weather";
import Forecast from "../../components/Forecast";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCurrentForecast } from "../../store/reducers/Forecast/ActionCreators";
import { changeTheme } from "../../store/reducers/Forecast/ForecastSlice";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.forecast);

  useEffect(() => {
    dispatch(fetchCurrentForecast({ days: 3 }));
  }, []);

  const toggleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div className={styles.wrapper} data-theme={store.theme}>
      <div className={styles.home}>
        <Header />
        <Weather />
        <Forecast />
        <div className={styles.buttonWrapper}>
          <button className={styles.toggleBtn} onClick={() => toggleTheme()}>
            Change Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
