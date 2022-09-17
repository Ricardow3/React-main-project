import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q92_EnemFis2021 from "./Q92";
import Q94_EnemFis2021 from "./Q94";

const EnemFis2021 = () => {

    const Pages = {
        q92: Q92_EnemFis2021,
        q94: Q94_EnemFis2021
    }

    const [newPage, setnewPage] = useState("q92");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header link = '/enem-fis' vestibular = 'ENEM: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {92}
            navbarList = {[94]}
            navbarPage = {newpageFunction} />
            <Aside
            Page = {newpageFunction}
            name = 'Questão 92' number = {92}
            listQ = {[94]} />

            {newPage === "q92" && <Pages.q92 />}
            {newPage === "q94" && <Pages.q94 />}
        </div>
    )
}

export default EnemFis2021;