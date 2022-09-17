import React from "react";
import "./style.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const UnicampFis = () => {
    return (
        <div className="page-provas">
            <Header navbarRender = {false}  
            link = '/unicamp-mat' vestibular = 'Unicamp: prova de matemática' imgId = 'navbar-display-none' menuId = 'menu-header-resp' />
            <h1 id="title-unicamp">Unicamp: Provas de Física</h1>
            <ul className="unicamp-fis-list" type="none">
                <Link className="unicamp-fis" to='/unicamp-fis-2022'><li>2022</li></Link>
                <Link className="unicamp-fis" to='/unicamp-fis-2021'><li>2021</li></Link>
                <Link className="unicamp-fis" to='/unicamp-fis-2020'><li>2020</li></Link>
            </ul>
            <p className="parag-prova">* As questões de 2022 se referem a prova de conhecimentos gerais Q e X</p>
        </div>
    )
};

export default UnicampFis;