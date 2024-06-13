import React from "react";
import styles from "./EssentialBox.module.css";
import {NON_LIKE_IMAGE, SHARE_IMAGE} from "../../../data/logoImages";

const EssentialBox = () => {


  return (
      <div className={styles.essentialBox}>
        <div className={styles.buttonBox}>
          <button>로그인</button>
        </div>
        <div className={styles.iconBox}>

            <div className={styles.iconItem}>
              <button className={styles.btn}>
                <div><img src={NON_LIKE_IMAGE} alt="like Image"/>
                </div> <div>관심</div>
              </button>
            </div>

            <div className={styles.iconItem}>
              <button className={styles.btn}>
                <div><img src={SHARE_IMAGE} alt="share Image"/>
                </div> <div>공유</div>
              </button>
            </div>

        </div>
      </div>
  );
};

export default EssentialBox;
