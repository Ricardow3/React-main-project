import React from "react";
import "./style.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const FuvestFis = () => {
    return (
        <div className="page-provas">
            <Header link = '/fuvest-mat' vestibular = 'Fuvest: prova de matemática' />
            <h1 id="title-fuvest">Fuvest: Provas de Física</h1>
            <ul className="fuvest-fis-list" type="none">
                <Link className="fuvest-fis" to='/fuvest-fis-2022'><li>2022</li></Link>
                <Link className="fuvest-fis" to='/fuvest-fis-2021'><li>2021</li></Link>
                <Link className="fuvest-fis" to='/fuvest-fis-2020'><li>2020</li></Link>
            </ul>
            <p className="parag-fuvest">* As questões se referem a prova de conhecimentos gerais - Grupo V</p>
        </div>
    )
};

export default FuvestFis;