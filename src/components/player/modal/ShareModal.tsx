import React, {FC, useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import ReactDOM from "react-dom/client";
import styles from "./ShareModal.module.css"

interface shareContent {
  type: string;
  id: String;
  closeModal: () => void
}


// @ts-ignore
const ShareModal:React.FC<shareContent> = (props) => {

  return createPortal(
    <div className={styles.modalBox}>
      <div className={styles.modalContent}>

        <div className={styles.sharingBox}>
          <div className={styles.title}>공유</div>

          <div className={styles.shareButtons}>
            <div>
              <button className={styles.shareButton}>
                <img src="/twitter-logo.png"/>
                <span>X(트위터)</span>
              </button>

            </div>
            <div>
              <button className={styles.shareButton}>
                <img src={"/facebook-logo.png"}/>
                <span>페이스북</span>
              </button>
            </div>
          </div>

          <div className={styles.linkSection}>
            <div><input type="text" value={`https://deep.wavve.com/content/${props.id}`}/></div>
            <div>
              <button className={styles.copyButton}>링크복사</button>
            </div>
          </div>

        </div>
      </div>


      <div>
        <button className={styles.closeButton} onClick={props.closeModal}><img src={"https://www.wavve.com/img/btn-popup-close.1b1a67e7.svg"}/></button>
      </div>

    </div>
 , document.getElementById("overlay-root") as HTMLElement)

};

export default ShareModal;