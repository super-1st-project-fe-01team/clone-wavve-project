import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from "./Utilmenu.module.css";

const Utilmenu = () => {
    const [couponShow, setCouponShow] = useState(false);
    
    return (
        <header>
            <div id={styles.headerNav}>
                <div className={styles.navWrap}>
                    <ul className={styles.naveWrapList}>
                        <li><Link to="#"></Link>
                            <NavLink to="/Login">로그인</NavLink>
                        </li>
                        <li><Link to="#">이용권</Link></li>
                        <li className={couponShow ? `${styles.over} ${styles.couponMenu}` : styles.couponMenu}
                            onMouseOver={() => {
                                setCouponShow(true)
                            }}
                            onMouseOut={() => {
                                setCouponShow(false)
                            }}
                        >
                            <Link to="#">쿠폰·코인</Link>
                            <div className={styles.couponMenuWrap}
                                 onMouseOut={() => {
                                     setCouponShow(false)
                                 }}
                            >
                                <div className={styles.couponMenuList}>
                                    <div><Link to="#">쿠폰 등록</Link></div>
                                    <div><Link to="#">코인 충전</Link></div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="#">웨이브온</Link></li>
                        <li><Link to="#">이벤트</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Utilmenu;