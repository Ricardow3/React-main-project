import React, { useState, lazy, Suspense } from "react";
import Header from "../Header";
import Aside from "../Aside";

const EnemFis2021 = () => {

    const Pages = {
        q92: "./Q92",
        q94: "./Q94",
        q105: "./Q105",
        q107: "./Q107",
        q115: "./Q115",
        q126: "./Q126"
    }

    const [newPage, setnewPage] = useState("q92");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    const PageComponent = lazy(() => import(`${Pages[newPage]}`));

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

            <Suspense>
                <PageComponent />
            </Suspense>
        </div>
    )
}

export default EnemFis2021;