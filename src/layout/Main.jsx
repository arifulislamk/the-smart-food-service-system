import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1 className=' text-5xl text-green-700'>Welcome to The Smart Food Service System</h1>
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default Main;