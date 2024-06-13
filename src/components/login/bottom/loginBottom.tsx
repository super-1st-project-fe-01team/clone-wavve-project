import React from "react";
import styles from "./loginBottom.module.css";
import kakao from './loginIcon/kakao-icon.png';
import naver from './loginIcon/naver-icon.png';
import apple from './loginIcon/apple-icon.png';

const LoginBottom = () => {
  return (
      <div>
        <div className={styles.bottomTitle}>
          또는 다른 서비스 계정으로 로그인
        </div>
        <div className={styles.bottomSns}>
          <img src={kakao} className={styles.kakao} alt="Kakao Login"></img>
          <img src={naver} className={styles.naver} alt="Naver Login"></img>
          <img src={apple} className={styles.apple} alt="Apple Login"></img>
        </div>
        <div className={styles.bottomDetail}>
          SNS 계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
          <br />
          기존 POOQ 계정 또는 Wavve 계정과는 연동되지 않으니 이용에 참고하세요.
        </div>
      </div>
  );
};

export default LoginBottom;