import React from "react";
import styles from "./video.module.css";
import MetadataList from "./MetadataList";
import EssentialBox from "./EssentialBox";
import {VideoDetailProps} from "../../../models/Player";



const VideoDetail:React.FC<VideoDetailProps> = (props) => {


  return (
      <div className={styles.videoDetailBox}>
        {props.brandLogoList[0] === "only"?
            <div><img src={"https://www.wavve.com/img/element-icons-logo-wavve-only.a1683da1.svg"}/></div> : <div>{""}</div>}
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
