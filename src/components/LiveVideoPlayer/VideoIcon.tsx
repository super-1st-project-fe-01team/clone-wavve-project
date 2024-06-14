import React from 'react';
import styles from './VideoIcon.module.css'
import {Live} from "../Live/thumbnail";

interface VideoIconProps {
  live: Live;
}

const VideoIcon: React.FC<VideoIconProps> = ({ live }) => {
  return (
        <div className={styles.videoList}>
          <div className={styles.titleList}>
            <div>
              <div className={styles.videoTitle}>{live.title}</div>
              <div className={styles.subTitle}>{live.subtitle}</div>
            </div>
            <button className={styles.loginButton}>로그인(무료시청)</button>
          </div>
          <ul className={styles.videoIconList}>
            <li className={styles.videoIconText}>
              <img className={styles.videoIcon}
                   src='https://www.wavve.com/img/element-icons-30-x-30-ic-big-like-off.88996165.svg'
                   alt={''}/>
              <span className={styles.iconTitle}> 관심 </span>
            </li>
            <li className={styles.videoIconText}>
              <img className={styles.videoIcon}
                   src='https://www.wavve.com/img/element-icons-30-x-30-ic-detail-share.0ce04411.svg'
                   alt={''}/>
              <span className={styles.iconTitle}> 공유 </span>
            </li>
            <li className={styles.videoIconText}>
              <img className={styles.videoIcon}
                   src='https://www.wavve.com/img/element-icons-30-x-30-ic-detail-schd-off.2b6fe70f.svg'
                   alt={''}/>
              <span className={styles.iconTitle}>전체 채널</span>
            </li>
          </ul>
        </div>
  );
};

export default VideoIcon;