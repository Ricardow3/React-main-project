import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MainMenu = () => {
    const mouseoverMat = () => {
        var menuMat = document.getElementById("list-mat");
        var menuFis = document.getElementById("list-fis");
        menuMat.classList.toggle("mat-responsive");
        menuFis.classList.remove("fis-responsive");
    }
    const mouseoverFis = () => {
        var menuFis = document.getElementById("list-fis");
        var menuMat = document.getElementById("list-mat");
        menuFis.classList.toggle("fis-responsive");
        menuMat.classList.remove("mat-responsive");
    }
    const mouseClickMatMobile = () => {
        var menuMat = document.getElementById("list-mat-mobile");
        var menuFis = document.getElementById("list-fis-mobile");
        menuMat.classList.toggle("mat-responsive");
        menuFis.classList.remove("fis-responsive");
    }
    const mouseClickFisMobile = () => {
        var menuFis = document.getElementById("list-fis-mobile");
        var menuMat = document.getElementById("list-mat-mobile");
        menuFis.classList.toggle("fis-responsive");
        menuMat.classList.remove("mat-responsive");
    }

    return (
        <div>
            <p className='parag-mainmenu'>Questões resolvidas de matemática e física dos vestibulares <span>Fuvest, Unicamp, UFRGS e Enem</span></p>
            <nav className="nav-select">
                <div id="button-mat" onClick={mouseoverMat}>
                    Matemática
                    <img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg" alt="arrow"></img>
                </div>    
                <div id="button-fis" onClick={mouseoverFis}>
                    Física
                    <img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg" alt="arrow"></img>
                </div>
            </nav>
            <div className="select">
                <ul id="list-mat" className="mat" type="none">
                    <Link className='provas' to='/fuvest-mat'><li>Fuvest</li></Link>
                    <Link className='provas' to='/unicamp-mat'><li>Unicamp</li></Link>
                    <Link className='provas' to='/ufrgs-mat'><li>UFRGS</li></Link>
                    <Link className='provas' to='/enem-mat'><li id='enem-mat'>ENEM</li></Link>
                </ul>
                <ul id="list-fis" className="fis" type="none">
                    <Link className='provas' to='/fuvest-fis'><li>Fuvest</li></Link>
                    <Link className='provas' to='/unicamp-fis'><li>Unicamp</li></Link>
                    <Link className='provas' to='/ufrgs-fis'><li>UFRGS</li></Link>
                    <Link className='provas' to='/enem-fis'><li id='enem-fis'>ENEM</li></Link>
                </ul>
            </div>
            <div id="button-mat-mobile" className="button-mobile" onClick={mouseClickMatMobile}>
                Matemática
                <img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg" alt="arrow"></img>
            </div>
            <ul id="list-mat-mobile" className="mat-mobile" type="none">
                <Link className='provas' to='/fuvest-mat'><li>Fuvest</li></Link>
                <Link className='provas' to='/unicamp-mat'><li>Unicamp</li></Link>
                <Link className='provas' to='/ufrgs-mat'><li>UFRGS</li></Link>
                <Link className='provas' to='/enem-mat'><li id='enem-mat'>ENEM</li></Link>
            </ul>
            <div id="button-fis-mobile" className="button-mobile" onClick={mouseClickFisMobile}>
                Física
                <img src="./img/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg" alt="arrow"></img>
            </div>
            <ul id="list-fis-mobile" className="fis-mobile" type="none">
                <Link className='provas' to='/fuvest-fis'><li>Fuvest</li></Link>
                <Link className='provas' to='/unicamp-fis'><li>Unicamp</li></Link>
                <Link className='provas' to='/ufrgs-fis'><li>UFRGS</li></Link>
                <Link className='provas' to='/enem-fis'><li id='enem-fis'>ENEM</li></Link>
            </ul>
            <p className='contato'>Contato: info@oneresolucoes.org</p>
        </div>
    );
}

export default MainMenu;
