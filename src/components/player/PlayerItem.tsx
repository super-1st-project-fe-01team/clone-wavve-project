import React from 'react';
import styles from "../category/Category.module.css";
import {Link} from "react-router-dom";
import {BottomContentsProps, Player} from "../../models/Player";
import BadgeImg from "../category/BadgeImg";


interface PlayerItemProps{
  playerId:String;
  thumbnailImageUrl:string;
  brandLogoList:string[]
}

const PlayerItem:React.FC<PlayerItemProps> = (props) => {

    // 현 컴포넌트에서 필요한 값
    // 이미지url
    // Id
    // 누르면 PlayerContent.tsx 이동

  console.log(`썸네일이미지: ${props.thumbnailImageUrl}`)
  return (
      <div className={styles.list}>
          <div className={styles.categoryListWrap}>
            <img
                src={props.thumbnailImageUrl}
                alt="거래"
            />
          </div>
        <BadgeImg brandLogoList={props.brandLogoList}/>
      </div>
  );
};

export default PlayerItem;