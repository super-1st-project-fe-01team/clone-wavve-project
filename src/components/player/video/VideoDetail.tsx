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
        <MetadataList releaseYear={
                      props.metadataList.releaseYear}
                      playTime={props.metadataList.playTime}
                      targetAge={props.metadataList.targetAge}
                      genres={props.metadataList.genres}
        />

        {/*현재는 영화만 만들었기때문에 직접 문자열로 넣어줬음*/}
        <EssentialBox  type={"movie"} id={props.movieId}/>
        <div className={styles.synopsis}>{props.synopsis} <button className={styles.addViewButton} onClick={ () => window.scrollTo(0, 10000)}>더보기</button></div>
      </div>
  )
};

export default VideoDetail;
