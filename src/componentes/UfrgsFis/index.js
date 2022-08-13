import React from "react";
import "./style.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const UfrgsFis = () => {
    return (
        <div className="page-provas">
            <Header link = '/ufrgs-mat' vestibular = 'UFRGS: prova de matemática' />
            <h1 id="title-ufrgs">UFRGS: Provas de Física</h1>
            <ul className="ufrgs-fis-list" type="none">
                <Link className="ufrgs-fis" to='/ufrgs-fis-2022'><li>2022</li></Link>
                <Link className="ufrgs-fis" to='/ufrgs-fis-2020'><li>2020</li></Link>
                <Link className="ufrgs-fis" to='/ufrgs-fis-2019'><li>2019</li></Link>
            </ul>
        </div>
    )
}

export default UfrgsFis;