import React from "react";
import styles from "../../asset/style/button/EditScoreButton.module.scss";
import { AiOutlineCalculator } from "react-icons/ai";

const EditScoreButton = () => {
  return (
    <button className={styles.editscore}>
      แก้ไขคะแนน <AiOutlineCalculator />
    </button>
  );
};

export default React.memo(EditScoreButton);
