import React from "react";
import styles from "./PlayerContent.module.css";
import BottomContents from "./bottomContents/BottomContents";

const PlayerContentWarp = () => {
  return (
    <div className={styles.videoContentWrap}>
      <BottomContents />
    </div>
  );
};

export default PlayerContentWarp;
