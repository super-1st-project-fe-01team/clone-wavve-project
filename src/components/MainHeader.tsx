import React from 'react';

import Utilmenu from "./navigation/Utilmenu";
import Navigation from "./navigation/Navigation";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import {Outlet,Routes,Route} from "react-router-dom";




const MainHeader = () => {
  return (
      <div>
        <Utilmenu/>
        <Navigation/>
      {/*  <Routes>*/}
      {/*  <Route path="/" element={<Home />} />*/}
      {/*</Routes>*/}
        {/*<Footer/>*/}
        <Outlet/>
      </div>
  );
};

export default MainHeader;