import React from "react";
import styles from "./PlayerNavigation.module.css";

const PlayerNavigation = () => {

  //TODO:
  // 다시 확인해보니 작품에 따라 버튼 구성이 다름 (추천, 상세정보는 기본)
  // player 인터페이스에  관련영상, 시리즈를 가지고 있는지에 대한 속성 정보가 필요
  return (
      <div>
        <nav className={styles.playerNav}>
          <div className={styles.playerNavItem}>
            <button>관련영상</button>
          </div>
          <div className={styles.playerNavItem}>
            <button>시리즈</button>
          </div>
          <div className={styles.playerNavItem}>
            <button>추천</button>
          </div>
          <div className={styles.playerNavItemActive}>
            <button>상세정보</button>
          </div>

        </nav>
      </div>
  );
};

export default PlayerNavigation;
