import React from "react";
import {VideoProps} from "../../models/Player";

const Video:React.FC<VideoProps> = (props) => {
  return <div>{props.videoUrl}</div>;
};

export default Video;
