import React from "react";
import styles from "../../asset/style/InfoCard/RoundOpen.module.scss";

const RoundOpen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>รอบที่เปิด</div>
      <div className={styles.rounds}>
        <Round round={1} enable />
        <Round round={2} enable />
        <Round round={3} />
        <Round round={4} enable />
        <Round round={5} />
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
