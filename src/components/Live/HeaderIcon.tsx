import React from "react";
import styles from "./HeaderIcon.module.css";

const HeaderIcon: React.FC = () => {
  return (
      <div className={styles.iconBar}>
        <div className={styles.text}>LIVE</div>
        <div className={styles.menu}>
          <img
              className={styles.icon}
              src="
          https://www.wavve.com/img/icon-alart-off.d0007c58.svg"
              alt={''}
          />
          <div>시청예약</div>
          <img
              className={styles.icon}
              src="https://www.wavve.com/img/ic-detail-schd-off.4b017899.svg"
              alt={''}
          />
          <div>편성표</div>
        </div>
      </div>
  );
};

export default HeaderIcon;