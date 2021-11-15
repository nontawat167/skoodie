import React from "react";
import styles from "../../asset/style/InfoCard/Infocard.module.scss";
import Footer from "./Footer";
import RoundDetail from "./RoundDetail";
import RoundHeader from "./RoundHeader";
import RoundOpen from "./RoundOpen";
import ScorePerportion from "./ScorePerportion";
import TopPart from "./TopPart";
import { AdmissionInfo } from "../../types/AdmissionInfo";

type InfoCardProps = {
  info: AdmissionInfo;
};

const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
  return (
    <div className={styles.container}>
      <TopPart
        faculty={info.faculty.name}
        major={info.name}
        university={info.faculty.university.name}
      />
      <RoundOpen roundSeats={info.roundSeats} />
      <RoundHeader round={5} type={info?.score?.scoreType} />
      <RoundDetail
        userScore={23453}
        avg={info.score?.avg}
        max={info.score?.max}
        min={info.score?.min}
        year={info.score?.year}
      />
      <ScorePerportion />
      <Footer like={info.likes} />
    </div>
  );
};

export default InfoCard;
