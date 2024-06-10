import React from "react";
import styles from "./EssentialBox.module.css";

const EssentialBox = () => {
  return (
      <div className={styles.essentialBox}>
        <div className={styles.buttonBox}>
          <button>로그인</button>
        </div>
        <div className={styles.iconBox}>
          <ul>
            <li className="icon-item">
              <input type="checkbox" id="check-like" />
              <label htmlFor="check-like">관심</label>
            </li>
            <li>
              <input type="button" id="share" />
              <label htmlFor="share">공유</label>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default EssentialBox;
