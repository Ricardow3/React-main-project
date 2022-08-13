import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MainMenu = () => {
    const mouseoverMat = () => {
        var menuMat = document.getElementById("list-mat");
        menuMat.classList.toggle("mat-responsive");
    }
    const mouseoutMat = () => {
        var menuMat = document.getElementById("list-mat");
        menuMat.classList.toggle("mat-responsive");
    }
    const mouseoverFis = () => {
        var menuFis = document.getElementById("list-fis");
        menuFis.classList.toggle("fis-responsive");
    }
    const mouseoutFis = () => {
        var menuFis = document.getElementById("list-fis");
        menuFis.classList.toggle("fis-responsive");
    }
    return (
        <div>
            <nav className="nav-select">
                <div id="button-mat" onMouseOver={mouseoverMat} onMouseOut={mouseoutMat}>
                    Matemática
                    <img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg" alt="arrow"></img>
                </div>    
                <div id="button-fis" onMouseOver={mouseoverFis} onMouseOut={mouseoutFis}>
                    Física
                    <img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg" alt="arrow"></img>
                </div>
            </nav>
            <div className="select">
                <ul id="list-mat" className="mat" type="none" onMouseOver={mouseoverMat} onMouseOut={mouseoutMat}>
                    <Link className='provas' to='/fuvest-mat'><li>Fuvest</li></Link>
                    <Link className='provas' to='/unicamp-mat'><li>Unicamp</li></Link>
                    <Link className='provas' to='/ufrgs-mat'><li>UFRGS</li></Link>
                </ul>
                <ul id="list-fis" className="fis" type="none" onMouseOver={mouseoverFis} onMouseOut={mouseoutFis}>
                    <Link className='provas' to='/fuvest-fis'><li>Fuvest</li></Link>
                    <Link className='provas' to='/unicamp-fis'><li>Unicamp</li></Link>
                    <Link className='provas' to='/ufrgs-fis'><li>UFRGS</li></Link>
                </ul>
            </div>
        </div> 
    );
}

export default MainMenu;
