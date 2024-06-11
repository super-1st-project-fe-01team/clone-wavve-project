import React from "react";
import styles from "./Live.module.css";

const LiveMain = () => {
  return (
      <div className={styles.liveList}>
        <div>
          <img
              className={styles.liveVideo}
              src="https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K01.webp?timestamp=1718015433497"
           alt={'에러'}/>
          <div className={styles.mainText}>KBS 1TV</div>
          <div className={styles.subText}>KBS 뉴스 7</div>
        </div>
        <div>
          <img
              className={styles.liveVideo}
              src="https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4101.webp?timestamp=1718015914501"
              alt={'에러'}/>
          <div className={styles.mainText}>현대홈쇼핑</div>
          <div className={styles.subText}>흥Good 모두드림 종합보험</div>
        </div>
        <div>
          <img
              className={styles.liveVideo}
              src="https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2501.webp?timestamp=1718015914509"
              alt={'에러'}/>
          <div className={styles.mainText}>채널A</div>
          <div className={styles.subText}>뉴스A</div>
        </div>
        <div>
          <img
              className={styles.liveVideo}
              src="https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2101.webp?timestamp=1718015914512"
              alt={'에러'}/>
          <div className={styles.mainText}>YTN</div>
          <div className={styles.subText}>뉴스PLUS</div>
        </div>
        <div>
          <img
              className={styles.liveVideo}
              src="
          https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/PM1.webp?timestamp=1718015914518"
              alt={'에러'}/>
          <div className={styles.mainText}>MBC 무한도전</div>
          <div className={styles.subText}>무한도전 나홀로 집에 412회</div>
        </div>
      </div>
  );
};

export default LiveMain;
