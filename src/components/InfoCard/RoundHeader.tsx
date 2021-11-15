import React from "react";

import styles from "../../asset/style/InfoCard/RoundHeader.module.scss";
import EditScoreButton from "../button/EditScoreButton";

const RoundHeader = () => {
  return (
    <div className={styles.container}>
      <label>รอบที่ 4 : Admission</label>
      <EditScoreButton />
    </div>
  );
};

export default React.memo(RoundHeader);
