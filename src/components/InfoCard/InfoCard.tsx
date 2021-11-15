import React from "react";
import styles from "../../asset/style/InfoCard/Infocard.module.scss";
import Footer from "./Footer";
import RoundDetail from "./RoundDetail";
import RoundHeader from "./RoundHeader";
import RoundOpen from "./RoundOpen";
import ScorePerportion from "./ScorePerportion";
import TopPart from "./TopPart";

const InfoCard = () => {
  return (
    <div className={styles.container}>
      <TopPart />
      <RoundOpen />
      <RoundHeader />
      <RoundDetail />
      <ScorePerportion />
      <Footer like={10} />
    </div>
  );
};

export default InfoCard;
