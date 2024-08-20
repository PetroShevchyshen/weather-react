import { FC } from "react";

import styles from "./Home.module.scss";

import Header from "../../components/Header";
import Weather from "../../components/Weather";
import Forecast from "../../components/Forecast";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Weather />
      <Forecast />
    </div>
  );
};

export default Home;
