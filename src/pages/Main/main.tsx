import { Navbar, Footer } from '../../components';
import React from 'react';
import { Outlet } from "react-router-dom";

export const MainArea: React.FC = () => {
    return(
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}