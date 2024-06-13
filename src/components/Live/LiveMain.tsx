import React from "react";
import styles from "./Live.module.css";
import { title } from "process";
import Category from "../category/Category";
import Navigation from "../navigation/Navigation";
import HeaderIcon from "./HeaderIcon"
import HeaderFilter from "./HeaderFilter"
import Footer from "../footer/Footer"


interface Live {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
}

const Lives: Live[] = [
  { id: 1, title: 'KBS 1TV', subtitle: 'KBS 뉴스 7', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K01.webp?timestamp=1718015433497' },
  { id: 2, title: '현대홈쇼핑', subtitle: '흥Good 모두드림 종합보험', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4101.webp?timestamp=1718015914501' },
  { id: 3, title: '채널A', subtitle: '뉴스A', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2501.webp?timestamp=1718015914509' },
  { id: 4, title: 'YTN', subtitle: '뉴스PLUS', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2101.webp?timestamp=1718015914512' },
  { id: 5, title: '무한도전', subtitle: '무한도전 나홀로 집에 412회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/PM1.webp?timestamp=1718015914518' },
  { id: 6, title: '맛있는녀석들', subtitle: '맛있는 녀석들 91회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/flive/thumbnail/C5202.webp?timestamp=1718106996386' },
  { id: 7, title: 'KBS 2TV', subtitle: '하이엔드 소금쟁이', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K02.webp?timestamp=1718106996388' },
  { id: 8, title: 'SK스토아', subtitle: '[코지마]코지마 안마의자', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/F2701.webp?timestamp=1718106996389' },
  { id: 9, title: 'YTN', subtitle: '뉴스퀘어 8PM', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2101.webp?timestamp=1718106996391' },
  { id: 10, title: 'ANIBOX', subtitle: '명탐정 코난5-어린이 탑정단 스페셜', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4401.webp?timestamp=1718106996395' },
  { id: 11, title: 'MBN', subtitle: '엄지의 제왕', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2401.webp?timestamp=1718106996396' },
  { id: 12, title: 'KBS 1박 2일', subtitle: '시즌1 명품 조연 특집', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K15.webp?timestamp=1718106996400' },
  { id: 13, title: '연합뉴스TV', subtitle: '뉴스리뷰', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/Y01.webp?timestamp=1718106996403' },
  { id: 14, title: 'KBS 사랑과 전쟁', subtitle: '사랑과 전쟁 시즌1 131화', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K31.webp?timestamp=1718106996405' },
  { id: 15, title: '채널A', subtitle: '요즘육아 금쪽갗은 내새끼', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2501.webp?timestamp=1718106996407' },
  { id: 16, title: '런닝맨', subtitle: '위험한 밥상', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/S16.webp?timestamp=1718106996408' },
  { id: 5, title: 'MBC 나 혼자 산다', subtitle: '[267화] 어느 멋진날', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/PM2.webp?timestamp=1718106996411' },
  { id: 6, title: 'KBS사극', subtitle: '태조 왕건 60회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K29.webp?timestamp=1718106996415' },
  { id: 7, title: '현대홈쇼핑+샵', subtitle: '진짜편한속옷 360도 무빙 썸머 인견 브라팬티', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4102.webp?timestamp=1718108036116' },
  { id: 5, title: 'MBC ON', subtitle: '전원일기 773회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/M14.webp?timestamp=1718108036116' },
];

const LiveMain: React.FC = () => {
  return (
      <div>
        {/*<Navigation/>*/}
        <HeaderIcon/>
        <HeaderFilter/>
         <div className={styles.liveList}>
            {Lives.map(Live => (
                <div key={Live.id}>
                  <img src={Live.thumbnail} alt={Live.title} className={styles.thumbnail} />
                  <div>
                    <div className={styles.liveTitle}>{Live.title}</div>
                    <div className={styles.liveSubTitle}>{Live.subtitle}</div>
                  </div>
                </div>
          ))}
         </div>
        <Footer/>
      </div>
  )
};

export default LiveMain;
