import React from "react";
import styles from "./login.module.css";
import LoginTop from './login/top/loginTop';
import LoginMid from "./login/mid/loginMid";
import LoginBottom from "./login/bottom/loginBottom";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";


const Login = () => {
  return (
      <div>
        <Navigation/>
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
