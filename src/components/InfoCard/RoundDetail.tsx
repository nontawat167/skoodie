import React from "react";

import styles from "../../asset/style/InfoCard/RoundDetail.module.scss";
import badgeIcon from "../../asset/image/badge.png";

type RoundDetailProps = {
  userScore: number;
  min: number | undefined;
  max: number | undefined;
  avg: number | undefined;
  year: number | undefined;
};

const RoundDetail: React.FC<RoundDetailProps> = ({
  userScore,
  min,
  max,
  avg,
  year,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topDetail}>
        <img src={badgeIcon} />
        <div className={styles.yourScore}>
          <label>คะแนนของคุณคือ</label>
          {userScore}
        </div>
      </div>
      <div className={styles.bottomDetail}>
        <ScoreDetail
          high={min ? min : "-"}
          year={year ? year : "-"}
          text={"คะแนนต่ำสุด"}
        />
        <hr />
        <ScoreDetail
          high={avg ? avg : "-"}
          year={year ? year : "-"}
          text={"คะแนนเฉลีย"}
        />
        <hr />
        <ScoreDetail
          high={max ? max : "-"}
          year={year ? year : "-"}
          text={"คะแนนสูงสุด"}
        />
      </div>
      <hr />
    </div>
  );
};

type ScoreDetailProps = {
  high: number | string | undefined;
  year: number | string | undefined;
  text: string;
};

const ScoreDetail: React.FC<ScoreDetailProps> = ({ high, year, text }) => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.highScore}>{high}</div>
      <div className={styles.lowScore}>{`${text} ${year}`}</div>
    </div>
  );
};

export default React.memo(RoundDetail);
