import { FC } from "react";
import styles from "./DropDownItem.module.scss";
import { DropDownItemProps } from "../../utilities/Models/DropDownItemProps";

const DropDownItem: FC<DropDownItemProps> = (data) => {
  const { name, country, url, searchFunction } = data;

  return (
    <p
      onClick={() => searchFunction(url)}
      className={styles.item}
    >{`${name} , ${country}`}</p>
  );
};

export default DropDownItem;
