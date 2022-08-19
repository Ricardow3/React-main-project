import React from 'react';
import './style.css';
import Header from '../Header';
import MainMenu from '../MainMenu';

const Home = () => {
    return (
        <div className="main-menu">
            <Header link ='/' imgId = 'navbar-display-none' menuId = 'menu-header-resp'
            navbarRender = {false} />
            <MainMenu />
        </div>
    )
};

export default Home;
