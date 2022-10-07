import React, { useState } from "react";
import "./style.css";
import Header from "../Header";
import Aside from "../Aside";
import Q24_unicamp2022 from "./Q24";
import Q20_unicamp2022 from "./Q20";
import Q16_unicamp2022 from "./Q16";
import Q19_unicamp2022 from "./Q19";

const UnicampMat2022 = () => {

    const Pages = {
        q16: Q16_unicamp2022,
        q19: Q19_unicamp2022,
        q20: Q20_unicamp2022,
        q24: Q24_unicamp2022,
    }

    const [newPage, setnewPage] = useState("q16");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header 
            link = '/unicamp-mat' vestibular = 'Unicamp: outras provas' outros = 'Outros vestibulares' 
            navbarRender = {true} number = {16} 
            navbarList = {[19, 20, 24]}
            navbarPage = {newpageFunction} />
            <Aside 
            Page = {newpageFunction}
            name = 'Questão 16' number = {16}
            listQ = {[19, 20, 24]} />

            {newPage === "q16" && <Pages.q16 />}
            {newPage === "q19" && <Pages.q19 />}
            {newPage === "q20" && <Pages.q20 />}
            {newPage === "q24" && <Pages.q24 />}
            
        </div>
    )
}

export default UnicampMat2022;