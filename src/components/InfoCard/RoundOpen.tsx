import React from "react";
import styles from "../../asset/style/InfoCard/RoundOpen.module.scss";

type RroundOpenProps = {
  roundSeats: number[];
};

const RoundOpen: React.FC<RroundOpenProps> = ({ roundSeats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>รอบที่เปิด</div>
      <div className={styles.rounds}>
        {roundSeats.map((seat, idx) => (
          <Round key={idx} round={idx + 1} enable={seat > 0} />
        ))}
      </div>
    </div>
  );
};

type RoundProps = {
  round: number;
  enable?: boolean;
};

const Round: React.FC<RoundProps> = ({ round, enable }) => {
  return (
    <div
      className={[styles.round, enable ? styles.enable : styles.disable].join(
        " "
      )}
    >
      {round}
    </div>
  );
};

export default React.memo(RoundOpen);
