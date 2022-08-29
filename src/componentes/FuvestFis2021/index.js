import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q45_fuvestFis2021 from "./Q45";
import Q46_fuvestFis2021 from "./Q46";
import Q47_fuvestFis2021 from "./Q47";

const FuvestFis2021 = () => {

    const Pages = {
        q45: Q45_fuvestFis2021,
        q46: Q46_fuvestFis2021,
        q47: Q47_fuvestFis2021
    }
    
    const [newPage, setnewPage] = useState("q45");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header link = '/fuvest-fis' vestibular = 'Fuvest: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {45} 
            navbarList = {[46, 47]}
            navbarPage = {newpageFunction} />
            <Aside 
            Page = {newpageFunction} 
            name = 'Questão 45' number = {45} 
            listQ = {[46, 47]} />

            {newPage === "q45" && <Pages.q45 />}
            {newPage === "q46" && <Pages.q46 />}
            {newPage === "q47" && <Pages.q47 />}
        </div>
    )
}

export default FuvestFis2021;