import React from 'react';
import styles from "./BadgeImg.module.css";


export interface BadgeImgProps{
  brandLogoList:string[]
}

//:React.FC<BadgeImgProps[]>
const BadgeImg:React.FC<BadgeImgProps> = (props) => {
    return (
        props.brandLogoList.includes("only", 0)? (
              <div className={styles.list}>
                <span className={styles.listBadge}>뱃지</span>
              </div>
          ) : null
    );
};

export default BadgeImg;


