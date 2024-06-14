import styles from "./PlayerContent.module.css";
import BottomContents from "./bottomContents/BottomContents";
import VideoDetail from "./video/VideoDetail";
import React, {useState} from "react";
import {Player} from "../../models/Player";
import {dummyDataList} from "../../data/dummyMovieDatas";
import {useLocation, useParams} from "react-router-dom";


// interface RouterParam{
//   id:string //대문자 포함됨
// }

const PlayerContentWarp:React.FC = () => {

  // const {id}= useParams<string>(); //?????? 아놔..
  // const movieData: Player | undefined = dummyDataList.find((player:Player) => player.movieId === id);
  // console.log("movieData: " + movieData);


  const movieId = useLocation().pathname.substring(8);
  console.log("현재 url: ", movieId)


  const[player, setPlayer] = useState(dummyDataList.find((player) => player.movieId == movieId));
  // const targetData = dummyDataList[0];

  // const player:Player|undefined = dummyDataList.find((player) => player.movieId == movieId);
  console.log("targetPlayer:",player);

  // 임시
  const backdropImage:string = "https://image.wavve.com/v1/thumbnails/1240_698_20_80/meta/image/202404/1714110746929872591.webp";

  // 배경이미지, 썸네일 문제

  return (
      <>
        {player ? (
            <>
              <div className={styles.videoContentWrap}>
                <div className={styles.backdropContainer}>
                  <img src={player.backdropImage} alt="포스터배경" />
                  <img src={"https://www.wavve.com/img/detail_gra_bg.093ce6cc.png"} alt="레이어" />
                </div>

                <div className={styles.videoDetailContainer}>
                  <VideoDetail
                      titleImage={player.videoDetail.titleImage}
                      metadataList={player.videoDetail.metadataList}
                      synopsis={player.videoDetail.synopsis}
                      brandLogoList={player.brandLogoList}
                  />
                </div>
              </div>

              <BottomContents
                  thumbnailImage={player.bottomContents.thumbnailImage}
                  preview={player.bottomContents.preview}
                  detailView={player.bottomContents.detailView}
              />
            </>
        ) : (
            <div>오류</div>
        )}
      </>

  );
}


export default PlayerContentWarp;
