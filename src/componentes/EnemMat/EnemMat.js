import React from "react";
import "./style.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const EnemMat = () => {

    return (
        <div className="page-provas">
            <Header navbarRender = {false} 
            link = '/enem-fis' vestibular = 'ENEM: prova de física' imgId = 'navbar-display-none' menuId = 'menu-header-resp' />
            <h1 id="title-enem">ENEM: Provas de Matemática</h1>
            <ul className="enem-mat-list" type="none">
                <Link className="enem-mat" to='/enem-mat-2021'><li>2021</li></Link>
                <Link className="enem-mat" to='/enem-mat-2020'><li>2020</li></Link>
                <Link className="enem-mat" to='/enem-mat-2019'><li>2019</li></Link>
            </ul>
            <p className="parag-prova">As questões se referem a prova de ciências da natureza e matemática - caderno AZUL</p>
        </div>
    )
}

export default EnemMat;