import React from "react";
import Header from "../Header";
import Aside from "../Aside";

const UnicampFis2022 = () => {

    return (
        <div>
            <Header link = '/unicamp-fis' vestibular = 'Unicamp: outras provas' outros = 'Outros vestibulares' />
            <div className="soon">
                <h1>Em breve</h1>
                <img src='./img/gear_icon.svg' alt='gear'></img>
            </div>
        </div>
    )
}

export default UnicampFis2022;