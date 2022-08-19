import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import NavBarResponsive from '../NavBarResponsive';

const Header = (props) => {
    
    const [colorButton, setColorButton] = useState(true);
    const [navbarOn, setNavbarOn] = useState(false);
    const toggleColor = () => {
        setColorButton(!colorButton);
        setNavbarOn(!navbarOn);
    }
    const hideNavBar = () => {
        setColorButton(!colorButton);
        setNavbarOn(!navbarOn);
    }

    return (
        <div>
        <header>
            <div className="logo">
                <Link className='logo-link' to='/'>
                    <img src="./img/one.svg" alt="ONE"></img>
                    <h1>resoluções</h1>
                </Link>
            </div>
            <nav id={props.menuId} className="nav-header">
                
                <ul type="none">
                    <Link className='link-header' to={props.link}><li>{props.vestibular}</li></Link> 
                    <Link className='link-header' to='/'><li>{props.outros}</li></Link>
                </ul>
                <img onClick={toggleColor} id={props.imgId} className={colorButton ? "navbar-button":"navbar-clicked"} src="./img/navbar_responsive.svg"></img>
                
                <img onClick={toggleColor} className={colorButton ? "navbar-colored":"navbar-colored-clicked"} src="./img/navbar_responsive_clicked.svg"></img>
            </nav>
            {props.navbarRender && <NavBarResponsive navbarSet = {navbarOn} hideNavBar = {hideNavBar} number = {props.number} listQ = {props.navbarList} Page = {props.navbarPage} />}
        </header>
        </div>
    );
}

export default Header;
