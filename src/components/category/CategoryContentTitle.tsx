import React from 'react';
import styles from "./CategoryContentTitle.module.css";

const CategoryContentTitle = () => {
    return (
        <section className={`${styles.categoryWrap} ${styles.categoryListContentWrap}`}>
            <div className={`${styles.contentWrap} ${styles.contentListWrap}`}>
                <div className={styles.contentTitle}>
                    <h2>오직 웨이브에서 #드라마</h2>
                    <p>더보기</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryContentTitle;