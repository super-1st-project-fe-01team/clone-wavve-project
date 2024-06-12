import React from "react";
import {VideoPictureProps} from "../../../models/Player";
import styles from "./video.module.css";

const VideoPicture:React.FC<VideoPictureProps> = (props) => {
  return <div className={styles.videoContainer}><img src={props.videoPictureUrl}/></div>;
};

export default VideoPicture;
