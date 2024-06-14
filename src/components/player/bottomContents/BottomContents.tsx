import React from "react";
import PlayerNavigation from "./navigation/PlayerNavigation";
import Preview from "./preview/Preview";
import DetailView from "./detailView/DetailView";
import {BottomContentsProps} from "../../../models/Player";
import styles from "./bottomView.module.css";

const BottomContents:React.FC<BottomContentsProps> = (props) => {

  // 꼬였다..

  // 임시
  const image1:string="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202404/1714110749654413518.webp";
  const image2:string="image.wavve.com/meta/image/202404/1714110749654413518.jpg";
  return (
      <div className={styles.bottomWarp}>
        <PlayerNavigation />
        <div>

          <div className={styles.detailViewBox}>
            <div className={styles.thumbnailContainer}> <img src={props.thumbnailImage}/> </div>

            <div className={styles.detailContainer}>
              {/*<Preview title={props.preview.title}*/}
              {/*         synopsis={props.preview.synopsis}*/}
              {/*/>*/}

              {/* 시간상 문제로 우선 상세정보 컴포넌트만 고정적으로 나오게 구현계획 */}
              <DetailView title={props.detailView.title}
                          synopsis={props.detailView.synopsis}
                          summary={props.detailView.summary}
                          genreTags={props.detailView.genreTags}
                          castings={props.detailView.castings}
                          directors={props.detailView.directors}
                          targetAge={props.detailView.targetAge}
                          deliverationInfo={props.detailView.deliverationInfo}
              />
            </div>

          </div>
        </div>



      </div>
  );
};

export default BottomContents;
