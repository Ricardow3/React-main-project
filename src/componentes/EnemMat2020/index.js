import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q144_EnemMat2020 from "./Q144";

const EnemMat2020 = () => {

    const Pages = {
        q144: Q144_EnemMat2020
    }

    const [newPage, setNewPage] = useState("q142");

    const newpageFunction = (pagina) => {
        setNewPage(pagina);
    }

    return (
        <div>
            <Header link = '/enem-mat' vestibular = 'ENEM: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {144}
            navbarList = {[144]}
            navbarPage = {newpageFunction} />
            <Aside
            Page = {newpageFunction}
            name = 'Questão 142' number = {144}
            listQ = {[144]} />

            {newPage === "q142" && <Pages.q144 />}

        </div>
    )
}

export default EnemMat2020;