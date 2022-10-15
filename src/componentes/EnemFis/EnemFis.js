import React from "react";
import "./style.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const EnemFis = () => {

    return (
        <div className="page-provas">
            <Header navbarRender = {false} 
            link = '/enem-mat' vestibular = 'ENEM: prova de matemática' imgId = 'navbar-display-none' menuId = 'menu-header-resp' />
            <h1 id="title-enem">ENEM: Provas de Física</h1>
            <ul className="enem-fis-list" type="none">
                <Link className="enem-fis" to='/enem-fis-2021'><li>2021</li></Link>
                <Link className="enem-fis" to='/enem-fis-2020'><li>2020</li></Link>
                <Link className="enem-fis" to='/enem-fis-2019'><li>2019</li></Link>
            </ul>
            <p className="parag-prova">As questões se referem a prova de ciências da natureza e matemática - caderno AZUL</p>
        </div>
    )
}

export default EnemFis;