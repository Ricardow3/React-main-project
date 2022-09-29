import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q142_EnemMat2021 from "./Q142";
import Q145_EnemMat2021 from "./Q145";
import Q146_EnemMat2021 from "./Q146";
import Q152_EnemMat2021 from "./Q152";

const EnemMat2021 = () => {

    const Pages = {
        q142: Q142_EnemMat2021,
        q145: Q145_EnemMat2021,
        q146: Q146_EnemMat2021,
        q152: Q152_EnemMat2021
    }

    const [newPage, setNewPage] = useState("q142");

    const newpageFunction = (pagina) => {
        setNewPage(pagina);
    }

    return (
        <div>
            <Header link = '/enem-mat' vestibular = 'ENEM: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {142}
            navbarList = {[145, 146, 152]}
            navbarPage = {newpageFunction} />
            <Aside
            Page = {newpageFunction}
            name = 'Questão 142' number = {142}
            listQ = {[145, 146, 152]} />

            {newPage === "q142" && <Pages.q142 />}
            {newPage === "q145" && <Pages.q145 />}
            {newPage === "q146" && <Pages.q146 />}
            {newPage === "q152" && <Pages.q152 />}
        </div>
    )
}

export default EnemMat2021;