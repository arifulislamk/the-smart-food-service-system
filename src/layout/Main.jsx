import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;