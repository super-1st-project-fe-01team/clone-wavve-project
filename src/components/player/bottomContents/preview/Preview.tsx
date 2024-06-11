import React from "react";
import styles from "./Preview.module.css";
import {PreviewProps} from "../../../../models/Player";

const Preview:React.FC<PreviewProps> = (props) => {
  return (
      <div className={styles.previewViewContent}>
        <div className={styles.previewDetailBox}>
          <div className={styles.previewTitle}>커넥션</div>
          <div className={styles.previewsubTitle}>
            {props.subtitle}
          </div>
          <div className={styles.previewExplanation}>
            {props.description}
          </div>
          <div className={styles.actorInfo}>출연: {props.castings}</div>
        </div>
      </div>
  );
};

export default Preview;