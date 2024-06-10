import React from "react";
import styles from "./videoDetail.module.css";

const MetadataList = () => {
  return (
    <div className={styles.metadataList}>
      <div className="dot-item">시즌 1개</div>
      <div className="dot-item">
        <img
          className={styles.ageRestriction}
          src="https://www.wavve.com/img/element-icons-72-x-72-ic-vod-15-years.3f150ba7.svg"
          alt="15세 이상"
        />
      </div>
      <div className="dot-item">드라마</div>
      <div className="dot-item">
        <img src="" alt="태그" />
      </div>
    </div>
  );
};

export default MetadataList;
