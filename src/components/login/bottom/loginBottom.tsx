import React from "react";
import styles from "./loginBottom.module.css";
import loginIcon1 from "../public/loginIcon/apple-icon.png";
import loginIcon2 from "../public/loginIcon/naver-icon.png";
import loginIcon3 from "../public/loginIcon/kakao-icon.png";

const loginBottom = () => {
  return (
      <div>
        <div className={styles.bottomTitle}>
          또는 다른 서비스 계정으로 로그인
        </div>
        <div className={styles.bottomSns}>
          <img src="/src/components/login/bottom/loginIcon/kakao-icon.png" className={styles.kakao}></img>
          <img src="loginIcon/naver-icon.png" className={styles.naver}></img>
          <img src="loginIcon/apple-icon.png" className={styles.apple}></img>
        </div>
        <div className={styles.bottomDetail}>
          SNS 계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
          <br />
          기존 POOQ 계정 또는 Wavve 계정과는 연동되지 않으니 이용에 참고하세요.
        </div>
      </div>
  );
};

export default loginBottom;
