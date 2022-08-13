import React from 'react';
import './style.css';
import Header from '../Header';
import MainMenu from '../MainMenu';

const Home = () => {
    return (
        <div className="main-menu">
            <Header link ='/' />
            <MainMenu />
        </div>
    )
};

export default Home;
