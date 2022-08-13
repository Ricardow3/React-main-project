import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Header = (props) => {
    return (
        <header>
            <div className="logo">
                <Link className='logo-link' to='/'>
                    <img src="./img/one.svg" alt="ONE"></img>
                    <h1>resoluções</h1>
                </Link>
            </div>
            <nav>
                <ul type="none">
                    <Link className='link-header' to={props.link}><li>{props.vestibular}</li></Link> 
                    <Link className='link-header' to='/'><li>{props.outros}</li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
