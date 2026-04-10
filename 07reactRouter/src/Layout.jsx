import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout (){
    return (
        <>
            <Header />

            <Outlet />
            {/* after giving outlet header and footer will be const no changes only in between i can change */}

            <Footer />
        </>
    )
}

export default Layout;