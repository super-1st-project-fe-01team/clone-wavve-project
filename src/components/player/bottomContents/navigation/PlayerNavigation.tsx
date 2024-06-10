import React from "react";
import styles from "./PlayerNavigation.module.css";

const PlayerNavigation = () => {
  return (
      <div>
        <nav className={styles.playerNav}>
          <ul>
            <li>
              <button>에피소드</button>
            </li>
            <li>
              <button>관련영상</button>
            </li>
            <li>
              <button>추천</button>
            </li>
            <li>
              <button>상세정보</button>
            </li>
            {/* 일단 nav의 상세정보구현을 목표 */}
          </ul>
        </nav>
      </div>
  );
};

export default PlayerNavigation;
