import React from "react";
import styles from "../../asset/style/InfoCard/TopPart.module.scss";
import facultyIcon from "../../asset/image/facultyIcon.png";
import { FaHeart } from "react-icons/fa";

const TopPart = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={facultyIcon} />

        <div className={styles.textPart}>
          <div className={styles.faculty}>
            คณะวิศวกรรมศาสตร์
            <FaHeart className={styles.like} />
          </div>

          <div className={styles.major}>สาขาวิศวกรรมทั่วไป</div>
          <div className={styles.university}>จุฬาลงกรณ์มหาวิทยาลัย</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default React.memo(TopPart);
