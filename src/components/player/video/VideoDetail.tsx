import React from "react";
import styles from "./video.module.css";
import MetadataList from "./MetadataList";
import EssentialBox from "./EssentialBox";
import {VideoDetailProps} from "../../../models/Player";



const VideoDetail:React.FC<VideoDetailProps> = (props) => {

  // 더보기 버튼 클릭 시 상세정보 뜨게해야함
  // (현재 상세정보만 넣기로 했으니 스크롤 맨 아래로 보내는 식으로 하면 되지 않을까)

  
  // 뭐지!!
  const titleImage1:string = "image.wavve.com/meta/image/202404/1714110759310485273.png";
  const titleImage2:string ="https://image.wavve.com/v1/thumbnails/0_0_20_80/meta/image/202404/1714110759310485273.png";

  return (
      <div className={styles.videoDetailBox}>
        <div>브랜드 로고</div>
        <div className={styles.titleImageContainer}><img src={titleImage2}/></div>
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
