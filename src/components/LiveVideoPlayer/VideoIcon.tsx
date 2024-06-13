import React from 'react';
import styles from './VideoIcon.module.css'

const VideoIcon: React.FC = () => {
  return (
      <div className={styles.videoList}>
        <div className={styles.videoTitle}>YTN YTN24</div>
        <ul>
          <li>
            <img className={styles.videoIcon}
                 src='https://www.wavve.com/img/element-icons-30-x-30-ic-big-like-off.88996165.svg'
                 alt={''}/>
            <span className={styles.iconTitle}> 관심 </span>
          </li>
          <li>
            <img className={styles.videoIcon}
                 src='https://www.wavve.com/img/element-icons-30-x-30-ic-detail-share.0ce04411.svg'
                 alt={''}/>
            <span className={styles.iconTitle}> 공유 </span>
          </li>
          <li>
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