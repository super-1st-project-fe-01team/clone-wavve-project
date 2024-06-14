import React from "react";
import styles from "./login.module.css";
import LoginTop from "../top/loginTop";
import LoginMid from "../mid/loginMid";
import LoginBottom from "../bottom/loginBottom";
import Footer from "../../footer/Footer"

const Login = () => {
  return (
      <div>
        <div className={styles.loginLayout}>
          <LoginTop />
          <LoginMid />
          <LoginBottom />
        </div>
        <Footer/>
      </div>
  );
};

export default Login;
