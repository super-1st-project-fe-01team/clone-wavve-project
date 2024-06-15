import React, {useRef} from 'react';
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
  { title: '뉴스퀘어 8PM', time: '21:30 - 22:50' },
  { title: '뉴스퀘어 8PM', time: '22:50 - 00:20' },
];
const VideoPairing:React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
      <div className={styles.channelPairingArea}>
        <div className={styles.channelPairingTitle}>채널 편성표</div>
        <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={scrollLeft}>
          <img className={styles.ArrowIcon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAyCAYAAABLXmvvAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAMgAAAADOcPUAAAABCUlEQVRYCe2UMQ6CQBBFKWwoqbkAvQlXoLGxM+EU3MJTeAm9gRov4AUs7CytLMT3NZMQK3bNEov5yQ+E3Zm3+Vkmy1yegCfgCXgCnoAn4AnEJtD3fYmPeBfbI7gOWIUvWNoHN4gpAFTjm4jogIuYPkE1QBp8x9IW50ENYjYDafEDSxs8i+kTVAOkw08srYOKYzcL9MZ9wF1sn9F1wGZYkUqKuB1d/MtGQHNsF+nEe/qLZAcGNv2vM4APh8WZw5S2lvwpGBZU0sSqkkMNAKzAmlSSJldta8mfwHKsiSXp4jXJoQYA9v2brWxtkicHsMFynQQ4hABf4sXwm797Ap6AJ+AJeAKewP8n8AIX2g4UK6s3owAAAABJRU5ErkJggg=="
              alt={''} />
        </button>
        <div className={styles.channelPairingListContainer}>
        <ul className={styles.channelPairingList} ref={listRef}>
          {pairing.map((pairing, index) => (
              <div key={index} className={styles.channelPairingTimeArea}>
                <div className={styles.channelPairingTime}>
                <span>{pairing.title}</span>
                <span>{pairing.time}</span>
                </div>
                <button className={styles.clockIconArea}>
                  <img className={styles.clockIcon}
                       src="https://www.wavve.com/img/icon-alart-off.d0007c58.svg"
                       alt={''}/>
                </button>
              </div>
          ))}
        </ul>
        </div>
        <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={scrollRight}>
          <img className={styles.ArrowIcon}
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAyCAYAAABLXmvvAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAMgAAAADOcPUAAAAA/ElEQVRYCe2UsQ2CUBRFKWgoqVmA3oQVaGzsTJjCLZjCJYwTqIkDuICFnaWVhXhuQks+xRObe5MTEv7nneQCP8scN+AG3IAbcANuwA3MaWAYhiNcoJqzP2wPwhMod6jDBqcGISvhDMoTmtQzYevICjiA8oI2bHhqELIc9qC8oUs9E7qOsJeZfGAXOjw1TMJRzGXoU/tD1xF2oMoVvYI8VDA1DJE+uCso+uBWU3vD7iNZ/hdDWsENlGUOFUT1KJNU8t8fo0ga0Mml6CQrw97d1CAkLegDUnSCFVN7w+4j2cJffpsHYmXxg2KNdBNWoQe5ATfgBtyAG3ADf23gC6CnDhZ+aXKdAAAAAElFTkSuQmCC"
               alt={''}/>
        </button>
      </div>
  );
};

export default VideoPairing;