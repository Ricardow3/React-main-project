import React from "react";
import Header from "../Header";
import Aside from "../Aside";

const UfrgsFis2020 = () => {

    return (
        <div>
            <Header link = '/ufrgs-fis' vestibular = 'UFRGS: outras provas' outros = 'Outros vestibulares' />
            <div className="soon">
                <h1>Em breve</h1>
                <img src='./img/gear_icon.svg' alt='gear'></img>
            </div>
        </div>
    )
}

export default UfrgsFis2020;