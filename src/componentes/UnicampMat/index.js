import React from "react";
import "./style.css";
import Header from "../Header";
import { Link } from 'react-router-dom';

const UnicampMat = () => {
    return (
        <div className="page-provas">
            <Header navbarRender = {false}
            link = '/unicamp-fis' vestibular = 'Unicamp: prova de física' imgId = 'navbar-display-none' menuId = 'menu-header-resp' />
            <h1 id="title-unicamp">Unicamp: Provas de Matemática</h1>
            <ul className="unicamp-mat-list" type="none">
                <Link className="unicamp-mat" to='/unicamp-mat-2022'><li>2022</li></Link>
                <Link className="unicamp-mat" to='/unicamp-mat-2021'><li>2021</li></Link>
                <Link className="unicamp-mat" to='/unicamp-mat-2020'><li>2020</li></Link>
            </ul>
            <p className="parag-unicamp">* As questões de 2022 se referem a prova de conhecimentos gerais Q e X</p>
        </div>
    )
}

export default UnicampMat;