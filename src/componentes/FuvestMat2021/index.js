import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q4_fuvest2021 from "./Q4";
import Q9_fuvest2021 from "./Q9";
import Q10_fuvest2021 from "./Q10";
import Q13_fuvest2021 from "./Q13";

const FuvestMat2021 = () => {

    const Pages = {
        q4: Q4_fuvest2021,
        q9: Q9_fuvest2021,
        q10: Q10_fuvest2021,
        q13: Q13_fuvest2021
    }
    
    const [newPage, setnewPage] = useState("q4");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header 
            link = '/fuvest-mat' vestibular = 'Fuvest: outras provas' outros = 'Outros vestibulares' 
            navbarRender = {true} number = {4} 
            navbarList = {[9, 10, 13]}
            navbarPage = {newpageFunction} />
            <Aside 
            Page = {newpageFunction} 
            name = 'Questão 4' number = {4} 
            listQ = {[9, 10, 13]} />

            {newPage === "q4" && <Pages.q4 />}
            {newPage === "q9" && <Pages.q9 />}
            {newPage === "q10" && <Pages.q10 />}
            {newPage === "q13" && <Pages.q13 />}
        </div>
    );
}

export default FuvestMat2021;
