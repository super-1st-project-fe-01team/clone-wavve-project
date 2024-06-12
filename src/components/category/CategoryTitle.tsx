import React from 'react';
import styles from "./CategoryTitle.module.css";

const CategoryTitle = () => {
    return (
        <main>
            <div id={styles.categoryTitle}>
                <div className={styles.titleWrap}>
                    <h1>Wavve ORIGINAL</h1>
                </div>
            </div>
        </main>
    );
};

export default CategoryTitle;