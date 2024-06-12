import React from "react";
import styles from "./PlayerContent.module.css";
import BottomContents from "./bottomContents/BottomContents";
import VideoDetail from "./video/VideoDetail";
import {PlayerProps} from "../../models/Player";
import VideoPicture from "./video/Video";


// ####한 페이지에 필요한 값들 (메인페이지에서 넘거야할 값들) #######
// 비디오영상(윗부분 배경)

// VideoDetail=================
// 제목이미지
// metadataList: 에피소드, 시청연령, 종류
// 요약설명? (아직 깜박하고 컴포넌트 안만듬)
// 공지사항 (있거나 없거나)

// <BottomContents> ==============
// <Preview>==
// 제목
// 부제목
// 설명
// 출연
// <DetailView> ==
// 썸네일이미지
// 요약
// 개요 (방영사,년도 ...)
// 장르 (#장르1, #장르2...)
// 출연 (출연자1, 출연자2...)
// 시청연령이미지



const PlayerContentWarp:React.FC<PlayerProps> = (props) => {
  return (
      <div className={styles.videoContentWrap}>
        <VideoPicture videoPictureUrl={props.video.videoPictureUrl}/>
        <VideoDetail titleImage={props.videoDetail.titleImage}
                     metadataList={props.videoDetail.metadataList}
                     summary={props.videoDetail.summary}
                     notice={props.videoDetail.notice}/>
        <BottomContents preview={props.bottomContents.preview} detailView={props.bottomContents.detailView}/>
      </div>
  );
};

export default PlayerContentWarp;
