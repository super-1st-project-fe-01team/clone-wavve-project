import React from "react";
import PlayerNavigation from "./navigation/PlayerNavigation";
import Preview from "./preview/Preview";
import DetailView from "./detailView/DetailView";

const BottomContents = () => {
  return (
    <div>
      <PlayerNavigation />
      <Preview />
      <DetailView />
    </div>
  );
};

export default BottomContents;
