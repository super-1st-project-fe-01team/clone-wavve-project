export interface Live {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  category: string;
}

export const Lives: Live[] = [
  { id: 1, title: 'KBS 1TV', subtitle: 'KBS 뉴스 7', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K01.webp?timestamp=1718015433497', category: '지상파' },
  { id: 2, title: '현대홈쇼핑', subtitle: '흥Good 모두드림 종합보험', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4101.webp?timestamp=1718015914501', category: '홈쇼핑 (무료)' },
  { id: 3, title: '채널A', subtitle: '뉴스A', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2501.webp?timestamp=1718015914509', category: '종편/보도' },
  { id: 4, title: '레전드 시트콤', subtitle: '웨만해선 그들을 막을 수 없다 72회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/S18.webp?timestamp=1718224852063', category: '정주행 채널 (무료)' },
  { id: 5, title: '무한도전', subtitle: '무한도전 나홀로 집에 412회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/PM1.webp?timestamp=1718015914518', category: '드라마/예능' },
  { id: 6, title: '맛있는녀석들', subtitle: '맛있는 녀석들 91회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/flive/thumbnail/C5202.webp?timestamp=1718106996386', category: '드라마/예능' },
  { id: 7, title: 'KBS 2TV', subtitle: '하이엔드 소금쟁이', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K02.webp?timestamp=1718106996388', category: '지상파' },
  { id: 8, title: 'SK스토아', subtitle: '[코지마]코지마 안마의자', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/F2701.webp?timestamp=1718106996389', category: '홈쇼핑 (무료)' },
  { id: 9, title: 'YTN', subtitle: '뉴스퀘어 8PM', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2101.webp?timestamp=1718106996391', category: '종편/보도' },
  { id: 10, title: 'ANIBOX', subtitle: '명탐정 코난5-어린이 탐정단 스페셜', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4401.webp?timestamp=1718106996395', category: '키즈/애니' },
  { id: 11, title: 'MBN', subtitle: '엄지의 제왕', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C2401.webp?timestamp=1718106996396', category: '종편/보도' },
  { id: 12, title: 'KBS 1박 2일', subtitle: '시즌1 명품 조연 특집', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K15.webp?timestamp=1718106996400', category: '드라마/예능' },
  { id: 13, title: '연합뉴스TV', subtitle: '뉴스리뷰', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/Y01.webp?timestamp=1718106996403', category: '종편/보도' },
  { id: 14, title: 'KBS 사랑과 전쟁', subtitle: '사랑과 전쟁 시즌1 131화', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K31.webp?timestamp=1718106996405', category: '드라마/예능' },
  { id: 15, title: 'MBC 드라마정주행24 LIVE', subtitle: '[소원을 말해봐] [14회] 증거만 있으면 오빠 결백 밝힐 수 있대요', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/M16.webp?timestamp=1718224852118', category: '정주행 채널 (무료)' },
  { id: 16, title: '런닝맨', subtitle: '위험한 밥상', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/S16.webp?timestamp=1718106996408', category: '드라마/예능' },
  { id: 17, title: 'MBC 나 혼자 산다', subtitle: '[267화] 어느 멋진날', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/PM2.webp?timestamp=1718106996411', category: '드라마/예능' },
  { id: 18, title: 'KBS사극', subtitle: '태조 왕건 60회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/K29.webp?timestamp=1718106996415', category: '드라마/예능' },
  { id: 19, title: '현대홈쇼핑+샵', subtitle: '진짜편한속옷 360도 무빙 썸머 인견 브라팬티', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4102.webp?timestamp=1718108036116', category: '홈쇼핑 (무료)' },
  { id: 20, title: 'MBC ON', subtitle: '전원일기 773회', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/M14.webp?timestamp=1718108036116', category: '드라마/예능' },
  { id: 21, title: 'KISS - 당신을 위한 발라드', subtitle: '슬픔을 위로하는 노래', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/BMS/Channelimage30/image/C2702-RERE.webp?timestamp=1718223593856', category: '라디오/음악' },
  { id: 22, title: 'SBS 파워FM', subtitle: '이익권의 펀펀투데이', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/BMS/Channelimage30/image/S07.webp?timestamp=1718223831146', category: '라디오/음악' },
  { id: 23, title: 'AVIONE', subtitle: '라바 인 뉴욕', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/C4402.webp?timestamp=1718224413284', category: '키즈/애니' },
  { id: 24, title: '인디필름', subtitle: '허밍', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/F2601.webp?timestamp=1718224007482', category: '영화/스포츠' },
  { id: 25, title: '국회방송', subtitle: '우리들의 법', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/F3301.webp?timestamp=1718224525645', category: '시사/교양' },
  { id: 26, title: '시네마 천국', subtitle: '음란선생 3부', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/H05.webp?timestamp=1718224007495', category: '영화/스포츠' },
  { id: 27, title: 'W Music Story', subtitle: 'HOT! POP Music', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/flive/thumbnail/F9504.webp?timestamp=1718223831140', category: '라디오/음악' },
  { id: 28, title: 'PLAYY 프리미엄 영화', subtitle: '보안관', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/H01.webp?timestamp=1718224007489', category: '영화/스포츠' },
  { id: 29, title: 'ANIMAX', subtitle: '헬로 카봇', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/A01.webp?timestamp=1718224413281', category: '키즈/애니' },
  { id: 30, title: '매일경제TV', subtitle: '증시 핫 브리핑', thumbnail: 'https://image.wavve.com/v1/thumbnails/240_135_20_80/live/thumbnail/F2001.webp?timestamp=1718224593197', category: '종편/보도' },
];