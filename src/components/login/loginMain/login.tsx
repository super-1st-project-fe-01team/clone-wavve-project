import React from "react";
import styles from "./login.module.css";
import LoginTop from "../top/loginTop";
import LoginMid from "../mid/loginMid";
import LoginBottom from "../bottom/loginBottom";
import Navigation from "../../navigation/Navigation";
import Footer from "../../footer/Footer"
import Utilmenu from "../../navigation/Utilmenu";



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
