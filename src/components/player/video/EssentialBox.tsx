import React, {useState} from "react";
import styles from "./EssentialBox.module.css";
import {LIKE_IMAGE, NON_LIKE_IMAGE, SHARE_IMAGE} from "../../../data/logoImages";
import ShareModal from "../modal/ShareModal";
import {useLocation} from "react-router-dom";
import {createPortal} from "react-dom";


interface contentType{
  type:string;
  id:String;
}


const EssentialBox:React.FC<contentType> = (props) => {
  const[isLike, setIsLike] = useState<boolean>(false);
  const[isOpenShareModal, setOpenShareModal] = useState<boolean>(false);


  //   https://deep.wavve.com/content/MV_CI01_LE0000011252
  //  /player/MV_CD01_WR0000011729'

  const likeButtonClickHandler = () =>{
    isLike? setIsLike(false):setIsLike(true);
  }

  const closeShareModal = () => {
    setOpenShareModal(false);
  }

  //TODO 인터페이스 속성 추가필요 (다운로드 가능 여부) -> 다운로드 아이콘 추가
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
              <button className={styles.btn} onClick={() => setOpenShareModal(true)}>
                <div><img src={SHARE_IMAGE} alt="share Image"/>
                </div>
                <div>공유</div>
              </button>
            </div>
        </div>

        {isOpenShareModal ?
          <ShareModal type={props.type} id={props.id} closeModal={closeShareModal}/>
        : null}

      </div>
  );
};

export default EssentialBox;


