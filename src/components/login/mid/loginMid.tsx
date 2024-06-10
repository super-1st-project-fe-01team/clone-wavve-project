import React, { useState } from "react";
import styles from "./loginMid.module.css";
import loginIcon1 from "../public/loginIcon/apple-icon.png";
import loginIcon2 from "../public/loginIcon/naver-icon.png";
import loginIcon3 from "../public/loginIcon/kakao-icon.png";


const LoginMid = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
      <div className={styles.midTitle}>Wavve 계정으로 로그인</div>
      <form>
        <div className={styles.midLoginBox}>
          <input
            className={styles.inputId}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="이메일 주소 또는 아이디"
          />
          <input
            className={styles.inputPassword}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="비밀번호"
          />
        </div>
      </form>
      <div className={styles.CheckBox}>
        <input className={styles.check} type="checkbox" />
        <span className={styles.checkBoxDetail}>아이디 저장</span>
        <input className={styles.check} type="checkbox" />
        <span className={styles.checkBoxDetail}>자동 로그인</span>
      </div>
      <div>
        <button type='submit'className={styles.loginBtn}>로그인</button>
        <div className={styles.midInfoFind}>
          <span>아이디 찾기 </span>
          <span className={styles.divider}> 비밀번호 재설정 </span>
          <span> 회원가입</span>
        </div>
      </div>
    </div>
  );
};


export default LoginMid;
