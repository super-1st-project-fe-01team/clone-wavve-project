import React from 'react';
import Utilmenu from "./navigation/Utilmenu";
import Navigation from "./navigation/Navigation";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";

const MainHeader = () => {
  return (
      <div>
        <Utilmenu/>
        <Navigation/>
        <Outlet/>
        <Footer/>
      </div>
  );
};

export default MainHeader;