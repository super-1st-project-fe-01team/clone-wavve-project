import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Category.module.css";
import CategoryTitle from "./CategoryTitle"
import CategoryContentTitle from "./CategoryContentTitle";
import CategoryList from "./CategoryList";
import Footer from "../footer/Footer";



const Category = () => {


    return (
        <main>
            <CategoryTitle/>
            <CategoryContentTitle/>
            <Category/>
            {/*<CategoryContentTitle/>*/}
            {/*<CategoryList/>*/}
            <section className={`${styles.categoryWrap} ${styles.categoryDrama}`}>
                <div className={styles.contentWrap}>
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
                        <div className={styles.list}>
                            <Link to="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2022/PRG_C9902_C99000000018-Vertical_LogoY-RE-RE.webp"
                                        alt="치얼업"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVSeason/2023/C9901_C99000000101-Vertical_LogoY_WOriginal-RE.webp"
                                        alt="약한영웅"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2022/PRG_C9902_C99000000017-Vertical_LogoY-RE-RE.webp"
                                        alt="진검승부"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9901_C99000000095-Vertical_LogoY_WOriginal.webp"
                                        alt="청춘블라썸"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9901_C99000000092-Vertical_LogoY_WOriginal.webp"
                                        alt="위기의 X"
                                    />
                                </div>
                                <div className={styles.listBadge}>
                                    <span>Wavve 배찌</span>
                                </div>
                            </a>
                        </div>
                        <div className={styles.list}>
                            <Link to="#">
                                <div className={styles.categoryListWrap}>
                                    <img
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9902_C99000000012-Vertical_LogoY.webp"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9902_C99000000011-Vertical_LogoY.webp"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9902_C99000000010-Vertical_LogoY.webp"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9901_C99000000084-Vertical_LogoY_WOriginal.webp"
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
                                        src="https://image.wavve.com/v1/thumbnails/240_360_20_80/BMS/TVProgram/2023/PRG_C9903_C99000000001-Vertical_LogoY_WOriginal-RE.webp"
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
            <Footer/>
        </main>
    );
};

export default Category;