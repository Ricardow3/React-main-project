import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q45_fuvestFis2021 from "./Q45";
import Q46_fuvestFis2021 from "./Q46";

const FuvestFis2021 = () => {

    const Pages = {
        q45: Q45_fuvestFis2021,
    }
    
    const [newPage, setnewPage] = useState("q45");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header link = '/fuvest-fis' vestibular = 'Fuvest: outras provas' outros = 'Outros vestibulares'
            navbarRender = {true} number = {45} 
            navbarList = {[45]}
            navbarPage = {newpageFunction} />
            <Aside 
            Page = {newpageFunction} 
            name = 'Questão 45' number = {45} 
            listQ = {[45]} />

            {newPage === "q45" && <Pages.q45 />}
        </div>
    )
}

export default FuvestFis2021;