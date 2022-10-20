import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q144_EnemMat2020 from "./Q144";
import Q146_EnemMat2020 from "./Q146";
import Q149_EnemMat2020 from "./Q149";

const EnemMat2020 = () => {

    const Pages = {
        q144: Q144_EnemMat2020,
        q146: Q146_EnemMat2020,
        q149: Q149_EnemMat2020
    }

    const [newPage, setNewPage] = useState("q144");

    const newpageFunction = (pagina) => {
        setNewPage(pagina);
    }

    return (
        <div>
            <Header link = '/enem-mat' vestibular = 'ENEM: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {144}
            navbarList = {[146, 149]}
            navbarPage = {newpageFunction} />
            <Aside
            Page = {newpageFunction}
            name = 'Questão 144' number = {144}
            listQ = {[146, 149]} />

            {newPage === "q144" && <Pages.q144 />}
            {newPage === "q146" && <Pages.q146 />}
            {newPage === "q149" && <Pages.q149 />}

        </div>
    )
}

export default EnemMat2020;