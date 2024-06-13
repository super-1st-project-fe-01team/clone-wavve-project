import React from "react";
import styles from "./PlayerNavigation.module.css";

const PlayerNavigation = () => {
  return (
      <div>
        <nav className={styles.playerNav}>
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
