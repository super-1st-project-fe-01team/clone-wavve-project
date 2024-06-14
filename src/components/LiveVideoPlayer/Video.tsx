import React from "react";
import styles from "./Video.module.css";
import VideoIcon from "./VideoIcon";
import VideoPairing from "./VideoPairing";
import LiveMain from "../Live/LiveMain";
import {useParams} from "react-router-dom";
import {Lives, Live} from "../Live/thumbnail";

interface RouteParams {
  id: number;
}


const Video: React.FC = () => {
  // @ts-ignore
  const { id } = useParams<RouteParams>();
  // @ts-ignore
  const live = Lives.find(live => live.id === parseInt(id));

  if (!live) {
    return <div>비디오를 찾을 수 없습니다.</div>;
  }

  return (
      <div>
        <div className={styles.videoArea}>
          <img className={styles.videoPlay}
               src={live.thumbnail}
               alt={live.title}
          />
        </div>
        <VideoIcon live={live} />
        <VideoPairing/>
        <LiveMain/>
      </div>
  )
};

export default Video;
