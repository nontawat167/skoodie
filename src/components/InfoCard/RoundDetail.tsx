import React from "react";

import styles from "../../asset/style/InfoCard/RoundDetail.module.scss";
import badgeIcon from "../../asset/image/badge.png";

const RoundDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topDetail}>
        <img src={badgeIcon} />
        <div className={styles.yourScore}>
          <label>คะแนนของคุณคือ</label>
          23,453
        </div>
      </div>
      <div className={styles.bottomDetail}>
        <ScoreDetail high={"20,845"} low={60} text={"คะแนนต่ำสุด"} />
        <hr />
        <ScoreDetail high={"21,345"} low={60} text={"คะแนนเฉลีย"} />
        <hr />
        <ScoreDetail high={"23,415"} low={60} text={"คะแนนสูงสุด"} />
      </div>
      <hr />
    </div>
  );
};

type ScoreDetailProps = {
  high: number | string;
  low: number | string;
  text: string;
};

const ScoreDetail: React.FC<ScoreDetailProps> = ({ high, low, text }) => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.highScore}>{high}</div>
      <div className={styles.lowScore}>{`${text} ${low}`}</div>
    </div>
  );
};

export default React.memo(RoundDetail);
