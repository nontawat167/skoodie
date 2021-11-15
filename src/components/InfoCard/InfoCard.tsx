import React from "react";
import styles from "../../asset/style/InfoCard/Infocard.module.scss";
import RoundOpen from "./RoundOpen";
import TopPart from "./TopPart";

const InfoCard = () => {
  return (
    <div className={styles.container}>
      <TopPart />
      <RoundOpen />
    </div>
  );
};

export default InfoCard;
