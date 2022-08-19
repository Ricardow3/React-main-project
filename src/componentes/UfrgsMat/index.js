import React from "react";
import "./style.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const UfrgsMat = () => {
    return (
        <div className="page-provas">
            <Header navbarRender = {false} 
            link = '/ufrgs-fis' vestibular = 'UFRGS: prova de física' imgId = 'navbar-display-none' menuId = 'menu-header-resp' />
            <h1 id="title-ufrgs">UFRGS: Provas de Matemática</h1>
            <ul className="ufrgs-mat-list" type="none">
                <Link className="ufrgs-mat" to='/ufrgs-mat-2022'><li>2022</li></Link>
                <Link className="ufrgs-mat" to='/ufrgs-mat-2020'><li>2020</li></Link>
                <Link className="ufrgs-mat" to='/ufrgs-mat-2019'><li>2019</li></Link>
            </ul>
        </div>
    )
}

export default UfrgsMat;