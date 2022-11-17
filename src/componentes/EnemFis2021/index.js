import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q92_EnemFis2021 from "./Q92";
import Q94_EnemFis2021 from "./Q94";
import Q105_EnemFis2021 from "./Q105";
import Q107_EnemFis2021 from "./Q107";
import Q115_EnemFis2021 from "./Q115";
import Q126_EnemFis2021 from "./Q126";

const EnemFis2021 = () => {

    const Pages = {
        q92: Q92_EnemFis2021,
        q94: Q94_EnemFis2021,
        q105: Q105_EnemFis2021,
        q107: Q107_EnemFis2021,
        q115: Q115_EnemFis2021,
        q126: Q126_EnemFis2021
    }

    const [newPage, setnewPage] = useState("q92");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header link = '/enem-fis' vestibular = 'ENEM: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {92}
            navbarList = {[94, 105, 107, 115, 126]}
            navbarPage = {newpageFunction} />
            <Aside
            Page = {newpageFunction}
            name = 'Questão 92' number = {92}
            listQ = {[94, 105, 107, 115, 126]} />

            {newPage === "q92" && <Pages.q92 />}
            {newPage === "q94" && <Pages.q94 />}
            {newPage === "q105" && <Pages.q105 />}
            {newPage === "q107" && <Pages.q107 />}
            {newPage === "q115" && <Pages.q115 />}
            {newPage === "q126" && <Pages.q126 />}
        </div>
    )
}

export default EnemFis2021;