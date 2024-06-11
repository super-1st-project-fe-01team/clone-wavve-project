import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Category.module.css";

const Category = () => {
    return (
        <main>
            <div id={styles.categoryTitle}>
                <div className={styles.titleWrap}>
                    <h1>Wavve ORIGINAL</h1>
                </div>
            </div>
            <section className={`${styles.categoryWrap} ${styles.categoryDrama}`}>
                <div className={styles.contentWrap}>
                    <div className={styles.contentTitle}>
                        <h2>오직 웨이브에서 #드라마</h2>
                        <p>더보기</p>
                    </div>
                    <div className={styles.categoryList}>
                        <div className={styles.list}>
                            <Link to="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202309/1694096687708568307.webp"
                                        alt="거래"
                                    />
                                </div>
                                <div className={styles.listBadge}>
                                    <span>Wavve 배찌</span>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.list}>
                            <Link to="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202307/1690347429301832978.webp"
                                        alt="연인"
                                    />
                                </div>
                                <div className={styles.listBadge}>
                                    <span>Wavve 배찌</span>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.list}>
                            <a href="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9901_C99000000109-Vertical_LogoY_WOriginal-RE.webp"
                                        alt="박하경 여행기"
                                    />
                                </div>
                                <div className={styles.listBadge}>
                                    <span>Wavve 배찌</span>
                                </div>
                            </a>
                        </div>
                        <div className={styles.list}>
                            <a href="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202306/1687843960776646857.webp"
                                        alt="빌딩숲의 감시자들"
                                    />
                                </div>
                                <div className={styles.listBadge}>
                                    <span>Wavve 배찌</span>
                                </div>
                            </a>
                        </div>
                        <div className={styles.list}>
                            <a href="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2022/PRG_C9902_C99000000019-Vertical_LogoY.webp"
                                        alt="일당백집사"
                                    />
                                </div>
                                <div className={styles.listBadge}>
                                    <span>Wavve 배찌</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.swiperButton} ${styles.prev}`}></div>
                <div className={`${styles.swiperButton} ${styles.next}`}></div>
            </section>
            <section className={`${styles.categoryWrap} ${styles.categoryEnter}`}>
                <div className={styles.contentWrap}>
                    <div className={styles.contentTitle}>
                        <h2>오직 웨이브에서 #드라마</h2>
                        <p>더보기</p>
                    </div>
                    <div className={styles.categoryList}>
                        <div className={styles.list}>
                            <Link to="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202309/1694096687708568307.webp"
                                        alt="거래"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className={styles.list}>
                            <Link to="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202307/1690347429301832978.webp"
                                        alt="연인"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className={styles.list}>
                            <a href="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9901_C99000000109-Vertical_LogoY_WOriginal-RE.webp"
                                        alt="박하경 여행기"
                                    />
                                </div>
                            </a>
                        </div>
                        <div className={styles.list}>
                            <a href="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202306/1687843960776646857.webp"
                                        alt="빌딩숲의 감시자들"
                                    />
                                </div>
                            </a>
                        </div>
                        <div className={styles.list}>
                            <a href="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2022/PRG_C9902_C99000000019-Vertical_LogoY.webp"
                                        alt="일당백집사"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Category;