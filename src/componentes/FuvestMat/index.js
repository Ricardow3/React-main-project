import React from "react";
import './style.css';
import Header from "../Header";
import { Link } from "react-router-dom";

const FuvestMat = () => {
    return (
        <div className="page-provas">
            <Header link = '/fuvest-fis' vestibular = 'Fuvest: prova de física' />
            <h1 id="title-fuvest">Fuvest: Provas de Matemática</h1>
            <ul className="fuvest-mat-list" type="none">
                <Link className="fuvest-mat" to='/fuvest-mat-2022'><li>2022</li></Link>
                <Link className="fuvest-mat" to='/fuvest-mat-2021'><li>2021</li></Link>
                <Link className="fuvest-mat" to='/fuvest-mat-2020'><li>2020</li></Link>     
            </ul>
            <p className="parag-fuvest">* As questões se referem a prova de conhecimentos gerais - Grupo V</p>      
        </div>
    )
};

export default FuvestMat;
