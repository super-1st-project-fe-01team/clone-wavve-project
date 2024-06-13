import styles from "./PlayerContent.module.css";
import BottomContents from "./bottomContents/BottomContents";
import VideoDetail from "./video/VideoDetail";
import React from "react";
import {Player} from "../../models/Player";
import {dummyDataList} from "../../data/dummyMovieDatas";
import {useLocation, useParams} from "react-router-dom";


// interface RouterParam{
//   id:string //대문자 포함됨
// }

const PlayerContentWarp:React.FC = () => {

 const {id}= useParams<string>(); //?????? 아놔..

  const movieData: Player | undefined = dummyDataList.find((player:Player) => player.movieId === id);

  console.log(movieData);


  // 임시
  const backdropImage:string = "https://image.wavve.com/v1/thumbnails/1240_698_20_80/meta/image/202404/1714110746929872591.webp";


  return (
      <>
      {/*  <div className={styles.videoContentWrap}>*/}
      {/*    <div className={styles.backdropContainer} >*/}
      {/*      <img  src={backdropImage} alt="포스터배경"/>*/}
      {/*      <img  src={"https://www.wavve.com/img/detail_gra_bg.093ce6cc.png"} alt="레이어"/>*/}
      {/*    </div>*/}

      {/*    <div className={styles.videoDetailContainer}>*/}
      {/*      <VideoDetail titleImage={movieData?.videoDetail.titleImage}*/}
      {/*                   metadataList={movieData?.videoDetail.metadataList}*/}
      {/*                   synopsis={movieData?.videoDetail.synopsis}/>*/}
      {/*    </div>*/}

      {/*</div>*/}


      {/*  <BottomContents thumbnailImage={movieData.bottomContents.thumbnailImage}*/}
      {/*                  preview={movieData.bottomContents.preview}*/}
      {/*                  detailView={movieData.bottomContents.detailView}/>*/}
      </>

  );
}


export default PlayerContentWarp;
