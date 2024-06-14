import React from 'react';
import Utilmenu from "./navigation/Utilmenu";
import Navigation from "./navigation/Navigation";
import {Outlet} from "react-router-dom";

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