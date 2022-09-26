import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q142_EnemMat2021 from "./Q142";
import Q145_EnemMat2021 from "./Q145";

const EnemMat2021 = () => {

    const Pages = {
        q142: Q142_EnemMat2021,
        q145: Q145_EnemMat2021
    }

    const [newPage, setNewPage] = useState("q142");

    const newpageFunction = (pagina) => {
        setNewPage(pagina);
    }

    return (
        <div>
            <Header link = '/enem-mat' vestibular = 'ENEM: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {142}
            navbarList = {[145]}
            navbarPage = {newpageFunction} />
            <Aside
            Page = {newpageFunction}
            name = 'Questão 142' number = {142}
            listQ = {[145]} />

            {newPage === "q142" && <Pages.q142 />}
            {newPage === "q145" && <Pages.q145 />}

        </div>
    )
}

export default EnemMat2021;