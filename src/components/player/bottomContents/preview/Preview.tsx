import React from "react";
import styles from "./Preview.module.css";

const Preview = () => {
  return (
    <div className={styles.previewViewContent}>
      <div className={styles.previewDetailBox}>
        <div className={styles.previewTitle}>커넥션</div>
        <div className={styles.previewsubTitle}>
          현재 에피소드 : 1. ‘우리 마약팀 안현경찰서의 자랑이다’
        </div>
        <div className={styles.previewExplanation}>
          안현경찰서 마약팀 에이스 장재경. 마약범과 사투로 분주한 어느 날, 이십
          년간 연락 없던 친구 박준서가 찾아온다. 이튿날 박준서는 싸늘한 주검으로
          발견되고 재경은 괴한들에 납치되어 강제로 마약에 중독된다.
        </div>
        <div className={styles.actorInfo}>출연: {"지성, 전미도"}</div>
      </div>
    </div>
  );
};

export default Preview;
