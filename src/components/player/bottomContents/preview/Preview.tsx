import React from "react";
import styles from "./Preview.module.css";
import {PreviewProps} from "../../../../models/Player";

const Preview:React.FC<PreviewProps> = (props) => {
  return (
      <div>
        <div>{props.title}</div>
        <div>{props.synopsis}</div>
      </div>
  );
};

export default Preview;