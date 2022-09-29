import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";

const EnemMat2020 = () => {

    return (
        <div>
            <Header link = '/enem-mat' vestibular = 'ENEM: outras provas' outros = 'Outros vestibulares' />
            <div className="soon">
                <h1>Em breve</h1>
                <img src='./img/gear_icon.svg' alt='gear'></img>
            </div>
        </div>
    )
}

export default EnemMat2020;