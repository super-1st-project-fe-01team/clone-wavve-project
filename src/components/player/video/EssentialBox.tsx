import React, {useState} from "react";
import styles from "./EssentialBox.module.css";
import {LIKE_IMAGE, NON_LIKE_IMAGE, SHARE_IMAGE} from "../../../data/logoImages";

const EssentialBox = () => {
  const[isLike, setIsLike] = useState<boolean>(false);

  const likeButtonClickHandler = () =>{
    isLike? setIsLike(false):setIsLike(true);
  }


  return (
      <div className={styles.essentialBox}>
        <div className={styles.buttonBox}>
          <button>로그인</button>
        </div>
        <div className={styles.iconBox}>

            <div className={styles.iconItem}>
              <button className={styles.btn} onClick={likeButtonClickHandler}>
                <div>
                  {isLike ? <img src={LIKE_IMAGE} alt="like Image"/> : <img src={NON_LIKE_IMAGE} alt="non like Image"/>}
                </div>
                <div>관심</div>
              </button>
            </div>

            <div className={styles.iconItem}>
              <button className={styles.btn}>
                <div><img src={SHARE_IMAGE} alt="share Image"/>
                </div> <div>공유</div>
              </button>
            </div>

        </div>
      </div>
  );
};

export default EssentialBox;
