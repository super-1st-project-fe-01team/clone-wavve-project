import React from 'react';
import {Link} from "react-router-dom";
import styles from "./CategoryList.module.css";
import CategoryContentTitle from "./CategoryContentTitle";
import {Player} from "../../models/Player";
import {dummyDataList} from "../../data/dummyMovieDatas";

const CategoryList = () => {

    const playerList: Player[] = dummyDataList;

    return (
        <main>
            <CategoryContentTitle/>
            <section className={styles.categoryListContentWrap}>
                <div className={styles.contentListWrap}>
                    <div className={styles.smallCategoryList}>
                        <div className={styles.smallList}>
                            <Link to="#">
                                <div className={styles.categorySmallListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_135_20_80/meta/image/202401/1706145022368893715.webp"
                                        alt="거래"
                                    />
                                </div>
                                <div className={styles.listInfo}>
                                    <h4>사상검증구역: 더 커뮤니티</h4>
                                    <p>커뮤니티의 시작, 정치의 시작시작시작시작시작f</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`${styles.swiperButton} ${styles.prev}`}></div>
                <div className={`${styles.swiperButton} ${styles.next}`}></div>
            </section>
        </main>
    );
};

export default CategoryList;