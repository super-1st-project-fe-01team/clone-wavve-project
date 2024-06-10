import React from "react";
import styles from "./videoDetail.module.css";
import MetadataList from "./MetadataList";
import EssentialBox from "./EssentialBox";
import {VideoDetailProps} from "../../../models/Player";
import Notice from "./Notice";

const VideoDetail:React.FC<VideoDetailProps> = (props) => {

  // 더보기 버튼 클릭 시 상세정보 뜨게해야함

  return (
      <div className={styles.vedioDetailBox}>
        <div className={styles.logoBox}>
          <img
              src={props.titleImage.titleImageUrl}
              alt={props.titleImage.titleName}
          />
        </div>
        <MetadataList seasonEpisodeCount={props.metadataList.seasonEpisodeCount}
                      ageRestriction={props.metadataList.ageRestriction}
                      category={props.metadataList.category}
                      isClosedCaptions={props.metadataList.isClosedCaptions}/>
        <EssentialBox />
        <div>{props.summary} <button>더보기</button></div>

        {props.notice && <Notice/>}
      </div>
  );
};

export default VideoDetail;
