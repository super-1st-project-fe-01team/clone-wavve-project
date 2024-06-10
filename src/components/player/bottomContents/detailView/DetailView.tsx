import React from "react";
import styles from "./DetailView.module.css";
import {DetailViewProps} from "../../../../models/Player";

const DetailView:React.FC<DetailViewProps> = (props) => {
  return (
      <div className={styles.detailViewBox}>
        <div className={styles.thumbnail}>
          <img src={props.ageRestriction.ageImage} alt={props.ageRestriction.ageString}></img>
        </div>
        <div className={styles.detailInfoBox}>
          <p className={styles.summary}>
            {/*누군가에 의해 마약에 강제로 중독된 마약팀 에이스 형사가 변질된 우정,*/}
            {/*그 커넥션의 전말을 밝혀내는 중독추적서스펜스*/}
            {props.summary}
          </p>
          <table className={styles.detailInfoTable}>
            <tbody>
            <tr>
              <th scope="row">개요</th>
              <td> {props.summary}</td>
            </tr>
            <tr>
              <th>장르</th>
              <td>
                {/*#범죄, #스릴러*/}

                {/*나중에 map으로 #장르1,#장르2.. 링크걸기(링크는 시간 남으면..)*/}
                {props.genreTags}
              </td>
            </tr>
            <tr>
              <th>출연</th>
              <td>
                {/*지성, 전미도*/}
                {props.castings}
              </td>
            </tr>
            <tr>
              <th>감독</th>
              <td>{props.director}</td>
            </tr>
            <tr>
              <th>등급</th>
              <td>
                <img
                    className={styles.viewerAgeLimit}
                    src={props.ageRestriction.ageImage}
                    alt={props.ageRestriction.ageString}
                ></img>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default DetailView;
