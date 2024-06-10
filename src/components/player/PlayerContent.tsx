import React from "react";
import styles from "./PlayerContent.module.css";
import BottomContents from "./bottomContents/BottomContents";
import Video from "./Video";

const PlayerContentWarp = () => {
  return (
    <div className={styles.videoContentWrap}>
      <Video />
      <BottomContents />
    </div>
  );
};

export default PlayerContentWarp;
