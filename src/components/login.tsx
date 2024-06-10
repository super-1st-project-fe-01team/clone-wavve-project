import React from "react";
import styles from "./login.module.css";
import LoginTop from "./login/top/loginTop";
import LoginMid from "./login/mid/loginMid";
import LoginBottom from "./login/bottom/loginBottom";

const login = () => {
  return (
    <div>
      <div className={styles.loginLayout}>
        <LoginTop />
        <LoginMid />
        <LoginBottom />
      </div>
    </div>
  );
};

export default login;
