import React from "react";
import styles from "./DetailView.module.css";
import {DetailViewProps} from "../../../../models/Player";
import {AGE_IMAGES, DELIVERATION_INFO_IMAGES} from "../../../../data/logoImages";

const DetailView:React.FC<DetailViewProps> = (props) => {


  const genreTags:string[] = props.genreTags;
  const castings:string[] = props.castings;
  const directors:string[] = props.directors;


  return (

        // <div className={styles.detailInfoBox}>
      <>
        <div className={styles.detailInfoBox}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.summary}>{props.synopsis}</div>
        </div>

        <div>
          <table className={styles.detailInfoTable}>
          <tbody>
          <tr>
            <th scope="row">개요</th>
            <td> {props.summary}</td>
          </tr>
          <tr>
            <th>장르</th>
            <td>
              {props.genreTags.map((tag,index) => <span>#{tag}{index === genreTags.length-1? "":","}</span>)}
            </td>
          </tr>
          <tr>
            <th>출연</th>
            <td>
              {props.castings.map((casting,index) => <span>{casting}{index === castings.length-1? "":","}</span>)}
            </td>
          </tr>
          <tr>
            <th>감독</th>
            <td>
              {props.directors.map((director,index) => <span>{director}{index === directors.length-1? "":","}</span>)}
            </td>
          </tr>
          <tr>
            <th>등급</th>
            <td>
              <img
                  className={styles.viewerAgeLimit}
                  src={AGE_IMAGES[props.targetAge]}
                  alt={props.targetAge.toString()}
              ></img>
            </td>
          </tr>
          <tr>
            <th>내용정보</th>
            <td>
              <div className={styles.iconItemContainer}>
                {props.deliverationInfo.map((info, index) => (
                    <div >
                      <div className={styles.iconItem}>
                        <img
                          className={styles.viewerAgeLimit}
                          src={DELIVERATION_INFO_IMAGES[index]}
                          alt={"정보"}
                      />
                      </div>
                    <div className={styles.iconItem}>
                       {info}
                    </div>

                    </div>
                ))}
              </div>


            </td>
          </tr>
          </tbody>
        </table>
        </div>
        </>

        // </div>
  );
};

export default DetailView;
