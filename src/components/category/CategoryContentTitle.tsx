import React from 'react';
import styles from "./CategoryContentTitle.module.css";

const CategoryContentTitle = () => {
    return (
        <section className={`${styles.categoryWrap} ${styles.categoryListContentWrap}`}>
            <div className={`${styles.contentWrap} ${styles.contentListWrap}`}>
                <div className={styles.contentTitle}>
                    <h2>실시간 인기 콘텐츠</h2>
                    <p>더보기</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryContentTitle;