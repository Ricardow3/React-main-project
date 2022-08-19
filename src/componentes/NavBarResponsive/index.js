import React, { useState, useEffect } from "react";
import "./style.css";

const NavBarResponsive = (props) => {

    const navbarOn = props.navbarSet;
    const [lista, setLista] = useState(props.listQ);
    const [lastQ, setlastQ] = useState(props.number);

    const setPage = (i, v) => {
        for (let x=0; x < lista.length; x++) {
            if (lista[i] === v) {
                props.Page("q" + v);
            }
        }
        let newLista = lista.filter((question) => question !== v);
        newLista.push(lastQ);
        newLista.sort(function(a, b){ return a - b });
        setlastQ(v);
        setLista(newLista);
        props.hideNavBar();
    }

    const questaoLista = (lista) => {
        const questoes = [];
        lista.forEach((v, i) => {
            questoes.push(<li onClick={() => setPage(i, v)} className="questions" key={"questao" + v}>Questão {v}</li>)
        });
        return questoes;
    }

    return (
        <nav className={navbarOn ? "navbar-responsive":"navbar-hidden" }>
            <ul type="none">
                {questaoLista(lista)}
            </ul>
        </nav>
    )
}

export default NavBarResponsive;