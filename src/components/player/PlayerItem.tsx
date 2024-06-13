import React from 'react';
import styles from "../category/Category.module.css";
import {Link} from "react-router-dom";
import {BottomContentsProps, Player} from "../../models/Player";

const PlayerItem:React.FC<Player> = (props) => {

  // 현 컴포넌트에서 필요한 값
  // 이미지url
  // Id
  // 누르면 PlayerContent.tsx 이동

  console.log(`썸네일이미지: ${props.bottomContents.thumbnailImage}`)
  return (
      <div className={styles.list}>
        <Link to="#">
          <div className={styles.categoryListWrap}>
            <img
                src={props.bottomContents.thumbnailImage}
                alt="거래"
            />
          </div>
          {props.brandLogoList.includes("only", 0) &&(
                <div className={styles.listBadge}>
                    <span>Wavve 배찌</span>
                </div>
          )}
        </Link>
      </div>
  );
};

export default PlayerItem;