import React, { useState } from "react";
import "./style.css";
import Header from "../Header";
import Aside from "../Aside";
import Q24_unicamp2022 from "./Q24";
import Q20_unicamp2022 from "./Q20";

const UnicampMat2022 = () => {

    const Pages = {
        q20: Q20_unicamp2022,
        q24: Q24_unicamp2022
    }

    const [newPage, setnewPage] = useState("q20");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header link = '/' vestibular = 'Unicamp: outras provas' outros = 'Outros vestibulares' />
            <Aside 
            Page = {newpageFunction}
            name = 'Questão 20' number = {20}
            listQ = {[24]} />

            {newPage === "q20" && <Pages.q20 />}
            {newPage === "q24" && <Pages.q24 />}
            
        </div>
    )
}

export default UnicampMat2022;