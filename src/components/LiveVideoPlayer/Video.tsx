import React from "react";
import styles from "./Video.module.css";
import VideoIcon from "./VideoIcon";
import VideoPairing from "./VideoPairing";
import LiveMain from "../Live/LiveMain";

const Video: React.FC = () => {
  return (
      <div>
        <div className={styles.videoArea}>
          <img className={styles.videoPaly}
               src="https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/Y01.webp?timestamp=1718127134355"
               alt={'에러'}/>
        </div>
        <VideoIcon/>
        <VideoPairing/>
        <LiveMain/>
      </div>
  )
};

export default Video;
