import React from 'react';
import styles from "./BadgeImg.module.css";


const BadgeImg = () => {
    return (
        <div className={styles.list}>
            <span className={styles.listBadge}>뱃지</span>
        </div>
    );
};

export default BadgeImg;
