import styles from "./PlayerContent.module.css";
import BottomContents from "./bottomContents/BottomContents";
import VideoDetail from "./video/VideoDetail";
import React from "react";
import {Player} from "../../models/Player";
import {dummyDataList} from "../../data/dummyMovieDatas";



const PlayerContentWarp = () => {

  // Link 태그로부터 객체 값을 받아올 수 있나?
  // 홈 쪽 완성되시면 연결하기
  // 객체를 그대로 받을 수 있으면 받고, 아니면 아이디 값만 받아서 여기서 새로 찾
  

  // 일단 임시로 작업할 데이터 하나만 받아왔음.
  const movieData:Player= dummyDataList[0];

  // // 배경 이미지가 .... 안돼... png로 넣었어야했다...
  // let imageUrl:string = movieData.backdropImage;
  // let newImageUrl: string = imageUrl.replace(/\.jpg$/, ".png");


  // 임시
  const backdropImage:string = "https://image.wavve.com/v1/thumbnails/1240_698_20_80/meta/image/202404/1714110746929872591.webp";



  return (
      <>
        <div className={styles.videoContentWrap}>
          <div className={styles.backdropContainer} >
            <img  src={backdropImage} alt="포스터배경"/>
            <img  src={"https://www.wavve.com/img/detail_gra_bg.093ce6cc.png"} alt="레이어"/>
          </div>

          <div className={styles.videoDetailContainer}>
            <VideoDetail metadataList={movieData.videoDetail.metadataList}
                         synopsis={movieData.videoDetail.synopsis}/>
          </div>

      </div>


        <BottomContents thumbnailImage={movieData.bottomContents.thumbnailImage}
                        preview={movieData.bottomContents.preview}
                        detailView={movieData.bottomContents.detailView}/></>

  );
}


export default PlayerContentWarp;
