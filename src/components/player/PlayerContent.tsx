import React from "react";
import styles from "./PlayerContent.module.css";
import BottomContents from "./bottomContents/BottomContents";
import Video from "./Video";
import VideoDetail from "./videoDetail/VideoDetail";

const PlayerContentWarp = () => {
  return (
    <div className={styles.videoContentWrap}>
      <Video />
      <VideoDetail />
      <BottomContents />
    </div>
  );
};

export default PlayerContentWarp;
