import React, { useState } from "react";
import "./style.css";
import Header from "../Header";
import Aside from "../Aside";
import Q15_fuvest2020 from "./Q15";
import Q16_fuvest2020 from "./Q16";
import Q17_fuvest2020 from "./Q17";

const FuvestMat2020 = () => {

    const Pages = {
        q15: Q15_fuvest2020,
        q16: Q16_fuvest2020,
        q17: Q17_fuvest2020
    }

    const [newPage, setNewPage] = useState("q15");
    
    const newpageFunction = (pagina) => {
        setNewPage(pagina);
    }

    return (
        <div>
            <Header link = '/fuvest-mat' vestibular = 'Fuvest: outras provas' outros = 'Outros vestibulares' />
            <Aside
            Page = {newpageFunction}
            name = "Questão 15" number = {15}
            listQ = {[16, 17]} />

            {newPage === 'q15' && <Pages.q15 />}
            {newPage === 'q16' && <Pages.q16 />}
            {newPage === 'q17' && <Pages.q17 />}
        </div>
    )
}

export default FuvestMat2020;