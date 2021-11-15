import React from "react";
import styles from "../../asset/style/InfoCard/Footer.module.scss";
import { FaUser } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

type FooterProps = {
  like?: number;
};

const Footer: React.FC<FooterProps> = ({ like = 0 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.interest}>
        <FaUser /> {`${like} คนที่สนใจ`}
      </div>
      <FiShare className={styles.share}/>
    </div>
  );
};

export default React.memo(Footer);
