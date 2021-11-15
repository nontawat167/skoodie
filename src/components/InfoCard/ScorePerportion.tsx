import React from "react";
import styles from "../../asset/style/InfoCard/ScorePreportion.module.scss";
import { AiFillCaretRight } from "react-icons/ai";

const ScorePreportion = () => {
  return (
    <>
      <div className={styles.container}>
        <label>
          <AiFillCaretRight /> ดูสัดส่วนคะแนน
        </label>
      </div>
      <hr />
    </>
  );
};

export default React.memo(ScorePreportion);
