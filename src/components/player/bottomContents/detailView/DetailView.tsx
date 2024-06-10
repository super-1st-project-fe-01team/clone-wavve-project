import React from "react";
import styles from "./DetailView.module.css";

const DetailView = () => {
  return (
    <div className={styles.detailViewBox}>
      <div className={styles.thumbnail}>
        <img src="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202405/1716451478418939196.webp"></img>
      </div>
      <div className={styles.detailInfoBox}>
        <p className={styles.summary}>
          누군가에 의해 마약에 강제로 중독된 마약팀 에이스 형사가 변질된 우정,
          그 커넥션의 전말을 밝혀내는 중독추적서스펜스
        </p>
        <table className={styles.detailInfoTable}>
          <tbody>
            <tr>
              <th scope="row">개요</th>
              <td> sbs, 2024~</td>
            </tr>
            <tr>
              <th>장르</th>
              <td> #범죄, #스릴러</td>
            </tr>
            <tr>
              <th>출연</th>
              <td> 지성, 전미도</td>
            </tr>
            <tr>
              <th>감독</th>
              <td> 김문교</td>
            </tr>
            <tr>
              <th>등급</th>
              <td>
                <img
                  className={styles.viewerAgeLimit}
                  src="https://www.wavve.com/img/element-icons-72-x-72-ic-vod-15-years.3f150ba7.svg"
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
