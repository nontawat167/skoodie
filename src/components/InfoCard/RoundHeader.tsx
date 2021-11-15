import React from "react";

import styles from "../../asset/style/InfoCard/RoundHeader.module.scss";
import EditScoreButton from "../button/EditScoreButton";

type RoundHeaderProps = {
  round: number;
  type: string | null | undefined;
};

const RoundHeader: React.FC<RoundHeaderProps> = ({ round, type }) => {
  return (
    <div className={styles.container}>
      <label>{`รอบที่ ${type? round : "-"} : ${type ? type: "-"}`}</label>
      <EditScoreButton />
    </div>
  );
};

export default React.memo(RoundHeader);
