import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';
import Navbar from '../../shared/Header/Navbar/Navbar';



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;