import React from "react";
import "./style.css";
import Header from "../Header";
import Aside from "../Aside";

const UfrgsMat2019 = () => {

    return (
        <div>
            <Header link = '/ufrgs-mat' vestibular = 'UFRGS: outras provas' outros = 'Outros vestibulares' />
            <div className="soon">
                <h1>Em breve</h1>
                <img src='./img/gear_icon.svg' alt='gear'></img>
            </div>
        </div>
    )
}

export default UfrgsMat2019;