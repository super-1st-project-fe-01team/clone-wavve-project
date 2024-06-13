import React from 'react';
import Utilmenu from "./navigation/Utilmenu";
import Navigation from "./navigation/Navigation";
import {Outlet,Routes,Route} from "react-router-dom";
import Home from "./home/Home";
import Footer from "../components/footer/Footer"





const MainHeader = () => {
  return (
      <div>
        <Utilmenu/>
        <Navigation/>
        <Outlet/>
      </div>
  );
};

export default MainHeader;