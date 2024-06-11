import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navigation.module.css";


const Navigation = () => {
    return (

        <header>
            <div id={styles.headerNav}>
                <div className={styles.navWrap}>
                    <ul className={styles.naveWrapList}>
                        <li><Link to="#">로그인</Link></li>
                        <li><Link to="#">이용권</Link></li>
                        <li className={styles.couponMenu}>
                            <Link to="#">쿠폰·코인</Link>
                            <div className={styles.couponMenuWrap}>
                                <ul>
                                    <li><Link to="#">쿠폰 등록</Link></li>
                                    <li><Link to="#">코인 충전</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to="#">웨이브온</Link></li>
                        <li><Link to="#">이벤트</Link></li>
                    </ul>
                </div>
            </div>
            <div id={styles.headerGnb}>
                <div className={styles.gnbWrap}>
                    <h1 className={styles.logo}>
                        <Link to="#">
                            <img
                                src="https://www.wavve.com/img/ci-wavve.5b304973.svg"
                                alt="웨이브로고"
                            />
                        </Link>
                    </h1>
                    <ul>
                        <li><Link to="#">홈</Link></li>
                        <li>
                            <Link to="#">카테고리</Link>
                            <div className={styles.categoryMenu}>
                                <button>전체 카테고리 보기</button>
                                <ul>
                                    <li><Link to="#">추천메뉴</Link></li>
                                    <li><Link to="#">ORIGINAL</Link></li>
                                    <li><Link to="#">CLASSIC</Link></li>
                                    <li><Link to="#">드라마</Link></li>
                                    <li><Link to="#">예능</Link></li>
                                    <li><Link to="#">시사교양</Link></li>
                                    <li><Link to="#">애니메이션</Link></li>
                                    <li><Link to="#">해외시리즈</Link></li>
                                    <li><Link to="#">영화</Link></li>
                                    <li><Link to="#">영화플러스</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to="#">LIVE</Link></li>
                        <li><Link to="#">MY</Link></li>
                    </ul>

                    <div className={styles.searchWrap}>
                        <label htmlFor="search">
                            <span>검색</span>
                        </label>
                        <input type="text" id="search" placeholder="제목, 장르를 입력하세요"/>
                        <button>
                            <span>삭제</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Navigation;