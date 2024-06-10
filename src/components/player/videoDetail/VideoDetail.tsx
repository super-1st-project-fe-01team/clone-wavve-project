import React from "react";
import styles from "./videoDetail.module.css";
import MetadataList from "./MetadataList";
import EssentialBox from "./EssentialBox";

const VideoDetail = () => {
  return (
    <div className={styles.vedioDetailBox}>
      <div className={styles.logoBox}>
        <img
          src="https://image.wavve.com/v1/thumbnails/0_0_20_80/meta/image/202405/1716451492658756960.png"
          alt="커넥션"
        />
      </div>
      <MetadataList />
      <EssentialBox />
      {/* notice */}
    </div>
  );
};

export default VideoDetail;
