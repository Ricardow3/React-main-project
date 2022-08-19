import React, { useState } from "react";
import Header from "../Header";
import Aside from "../Aside";
import Q46_ufrgs2022 from "./Q46";
import Q53_ufrgs2022 from "./Q53";

const UfrgsMat2022 = () => {

    const Pages = {
        q46: Q46_ufrgs2022,
        q53: Q53_ufrgs2022
    }

    const [newPage, setnewPage] = useState("q46");

    const newpageFunction = (pagina) => {
        setnewPage(pagina);
    }

    return (
        <div>
            <Header 
            link = '/ufrgs-mat' vestibular = 'UFRGS: outras provas' outros = 'Outros vestibulares' 
            navbarRender = {true} number = {46} 
            navbarList = {[53]}
            navbarPage = {newpageFunction} />
            <Aside
            Page = {newpageFunction}
            name = 'Questão 46' number = {46}
            listQ = {[53]} />

            {newPage === "q46" && <Pages.q46 />}
            {newPage === "q53" && <Pages.q53 />}
        </div>
    )
}

export default UfrgsMat2022;