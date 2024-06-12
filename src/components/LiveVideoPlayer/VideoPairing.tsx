import React from 'react';
import styles from './VideoPairing.module.css'

interface channelPairing {
  title: string;
  time: string;
}

const pairing: channelPairing[] = [
  { title: '뉴스퀘어 2PM', time: '13:50 - 15:50' },
  { title: '뉴스ON', time: '15:50 - 17:50' },
  { title: '뉴스PLUS', time: '17:50 - 19:50' },
  { title: '뉴스퀘어 8PM', time: '19:50 - 21:30' },
];
const VideoPairing:React.FC = () => {
  return (
      <div className={styles.channelPairingArea}>
        <div className={styles.channelPairingTitle}>채널 편성표</div>
        <ul>
          {pairing.map((pairing, index) => (
              <li key={index} className={pairing.title === '뉴스ON' ? 'current' : ''} >
                <span className="title">{pairing.title}</span>
                <span className="time">{pairing.time}</span>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default VideoPairing;