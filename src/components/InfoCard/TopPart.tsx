import React from "react";
import styles from "../../asset/style/InfoCard/TopPart.module.scss";
import facultyIcon from "../../asset/image/facultyIcon.png";
import { FaHeart } from "react-icons/fa";

type props = {
  faculty: string;
  major: string;
  university: string;
};

const TopPart: React.FC<props> = ({ faculty, major, university }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={facultyIcon} />

        <div className={styles.textPart}>
          <div className={styles.faculty}>
            {faculty}
            <FaHeart className={styles.like} />
          </div>

          <div className={styles.major}>{major}</div>
          <div className={styles.university}>{university}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default React.memo(TopPart);
