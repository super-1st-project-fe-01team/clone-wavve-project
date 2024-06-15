import React, {useState} from "react";
import {Link, NavLink, Outlet, Route} from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
    const [cateShow, setCateShow] = useState(false);

    return (
        <header>
            <div id={styles.headerNav}>
                <div className={styles.headerGnbWrap}>
                    <div className={styles.gnbWrap}>
                        <h1 className={styles.logo}>
                            <Link to="/home">
                                <img
                                    src="https://www.wavve.com/img/ci-wavve.5b304973.svg"
                                    alt="웨이브로고"
                                />
                            </Link>
                        </h1>
                        <ul>
                            <li><Link to="#"></Link>
                                <NavLink to="/home">홈</NavLink>
                            </li>
                            <li className={cateShow ? styles.cateOver : styles.cate}
                                onMouseOver={() => {
                                    setCateShow(true)
                                }}
                                onMouseOut={() => {
                                    setCateShow(false)
                                }}>
                                <Link to="/Category">카테고리</Link>
                                <div className={styles.categoryMenu}
                                     onMouseOut={() => {
                                         setCateShow(false)
                                     }}
                                >
                                    <button>전체 카테고리 보기</button>
                                    <ul>
                                        <li><Link to="#">추천메뉴</Link></li>
                                        <li><Link to="#"></Link>
                                            <NavLink to="/Category">ORIGINAL</NavLink>
                                        </li>
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
                            <li><Link to="#"></Link>
                                <NavLink to="/live-main">LIVE</NavLink>
                            </li>
                            <li><Link to="#"></Link>
                                <NavLink to="/Login">MY</NavLink>
                            </li>
                        </ul>
                        <div className={`${styles.searchBox} ${styles.active}`}>
                            <label htmlFor="search" className={styles.btnSearch}>
                                <span className={styles.a11yHidden}>검색</span>
                            </label>
                            <input type="text" id="search" name="search"
                                   className={styles.searchInput}/>
                            {/*<p className={styles.btnDel}>*/}
                            {/*    <span className={styles.a11yHidden}>검색어 삭제</span>*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Navigation;