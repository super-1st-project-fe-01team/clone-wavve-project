import React from "react";
import PlayerNavigation from "./navigation/PlayerNavigation";
import Preview from "./preview/Preview";
import DetailView from "./detailView/DetailView";
import {BottomContentsProps} from "../../../models/Player";

const BottomContents:React.FC<BottomContentsProps> = (props) => {
  return (
      <div>
        <PlayerNavigation />
        <Preview title={props.preview.title}
                 subtitle={props.preview.subtitle}
                 description={props.preview.description}
                 castings={props.preview.castings}/>

        {/* 시간상 문제로 우선 상세정보 컴포넌트만 고정적으로 나오게 구현계획 */}
        <DetailView thumbnailImage={props.detailView.thumbnailImage}
                    summary={props.detailView.summary}
                    genreTags={props.detailView.genreTags}
                    castings={props.detailView.castings}
                    director={props.detailView.director}
                    ageRestriction={props.detailView.ageRestriction}/>
      </div>
  );
};

export default BottomContents;
