import { FC, useEffect } from "react";

import styles from "./Home.module.scss";

import Header from "../../components/Header";
import Weather from "../../components/Weather";
import Forecast from "../../components/Forecast";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchCurrentForecast } from "../../store/reducers/Forecast/ActionCreators";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentForecast({ days: 3 }));
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <Header />
      <Weather />
      <Forecast />
    </div>
  );
};

export default Home;
