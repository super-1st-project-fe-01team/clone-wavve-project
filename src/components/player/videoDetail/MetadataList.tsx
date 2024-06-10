import React from "react";
import styles from "./videoDetail.module.css";
import {MetadataListProps} from "../../../models/Player";

const MetadataList:React.FC<MetadataListProps> = (props) => {
  return (
      <div className={styles.metadataList}>
        <div className="dot-item seasonEpisodeCount">{props.seasonEpisodeCount}</div>
        <div className="dot-item">
          <img
              className={styles.ageRestriction}
              src={props.ageRestriction.ageImage}
              alt={props.ageRestriction.ageString}
          />
        </div>
        <div className="dot-item category">드라마</div>
        <div className="dot-item">
          {props.isClosedCaptions &&  <img src ="나중에 자막이미지넣기" alt="자막제공여부" />}
        </div>
      </div>
  );
};

export default MetadataList;
