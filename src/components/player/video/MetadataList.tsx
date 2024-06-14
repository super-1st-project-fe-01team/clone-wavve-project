import React from "react";
import {MetadataListProps} from "../../../models/Player";
import {AGE_IMAGES} from "../../../data/logoImages";
import styles from "../video/video.module.css"

const MetadataList:React.FC<MetadataListProps> = (props) => {

  return (

      <div className={styles.dotItemBox}>
        <div className={styles.dotItem}>{props.releaseYear}년</div>
        <div className={styles.dotItem}>·</div>
        <div className={styles.dotItem}>{`${Math.floor(props.playTime/60)}분`}</div>
        <div className={styles.dotItem}>·</div>
        <div className={styles.dotItem}><img src={AGE_IMAGES[props.targetAge]}/></div>
        <div className={styles.dotItem}>{`·${props.genres[0]}`}</div>
      </div>
  );
};

export default MetadataList;
