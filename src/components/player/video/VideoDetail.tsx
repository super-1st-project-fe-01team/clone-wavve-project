import React from "react";
import styles from "./video.module.css";
import MetadataList from "./MetadataList";
import EssentialBox from "./EssentialBox";
import {VideoDetailProps} from "../../../models/Player";
import {BRAND_LOGO_IMAGE} from "../../../data/logoImages";



const VideoDetail:React.FC<VideoDetailProps> = (props) => {

  return (
      <div className={styles.videoDetailBox}>

        <div className={styles.brandBox}>
          {props.brandLogoList.map((brand) => (
            <span>
              <img src={BRAND_LOGO_IMAGE[brand]} alt={`${brand} logo`} />
            </span>
        ))}
        </div>

        <div className={styles.titleImageContainer}><img src={props.titleImage}/></div>
        <MetadataList releaseYear={props.metadataList.releaseYear}
                                     playTime={props.metadataList.playTime}
                                     targetAge={props.metadataList.targetAge}
                                     genres={props.metadataList.genres}/>

        <EssentialBox />
        <div className={styles.synopsis}>{props.synopsis} <button>더보기</button></div>
      </div>
  )
};

export default VideoDetail;
