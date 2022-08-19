import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../Header';
import MainMenu from '../MainMenu';

const Home = () => {
    const [mobileScreen, setMobileScreen] = useState(false);
  
    useEffect(() => {
      const mobile = window.matchMedia("(max-width: 475px)")
      function updateScreen(e) {
        setMobileScreen(e.matches);
      }
      mobile.addEventListener('change', updateScreen)
      return function cleanup () {
      mobile.removeEventListener('change', updateScreen)
      }
    })
    if (mobileScreen) {
        return (
            <div className='mobile'>
                <div className="logo-mobile">
                    <img src="./img/one.svg" alt="ONE"></img>
                    <h1>resoluções</h1>
                </div>
                <p>Disponível em breve para dispositivos móveis</p>
            </div>
        )
    }
    return (
        <div className="main-menu">
            <Header link ='/' imgId = 'navbar-display-none' menuId = 'menu-header-resp'
            navbarRender = {false} />
            <MainMenu />
        </div>
    )
};

export default Home;
