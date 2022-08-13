import React, { useState } from "react";
import "./style.css";


const Aside = (props) => {
    const arrow_down_url = "/img/arrow_down.svg";
    const arrow_up_url = "/img/arrow_up.svg";
    const [title, setTitle] = useState(props.name);
    const [lastQ, setlastQ] = useState(props.number);
    const [lista, setLista] = useState(props.listQ);

    
    const mouseclickQuestao = () => {
        var menuQuestao = document.querySelector(".question-list");
        menuQuestao.classList.toggle("question-list-responsive");
        if (document.getElementById("arrow").src == "http://localhost:3000" + arrow_down_url) {
            document.getElementById("arrow").src = arrow_up_url;
        } else {
            document.getElementById("arrow").src = arrow_down_url;
        }
    }

    const setAside = (v) => {
        var menuItem = document.querySelector(".question-list");
        setTitle('Questão ' + v);
        let newLista = lista.filter((question) => question !== v);
        newLista.push(lastQ);
        newLista.sort(function(a, b){ return a - b });
        setlastQ(v);
        setLista(newLista);
        menuItem.classList.remove("question-list-responsive");
        }

    const setPage = (i, v) => {
        for (let x=0; x < lista.length; x++) {
            if (lista[i] == v) {
                props.Page("q" + v);
            }
        }
    }
    const setParam = (i, v) => {
        setAside(v);
        setPage(i, v);

        var i = 500;
        if (window.scrollY > 500) {
            var int = setInterval(function() {
            window.scrollTo(0, i);
            i -= 50;
            if (i == 0) {
                window.scrollTo(0, i);
                clearInterval(int);
            } 
        }, 10);
        } else {
            window.scrollTo(0, 0);
        }
        if (document.getElementById("arrow").src == "http://localhost:3000" + arrow_down_url) {
            document.getElementById("arrow").src = arrow_up_url;
        } else {
            document.getElementById("arrow").src = arrow_down_url;
        }
    }

    const questaoLista = (lista) => {
        const questoes = [];
        lista.forEach((v, i) => {
            questoes.push(<li onClick={() => setParam(i, v)} className="questions" key={"questao" + v}>Questão {v}</li>)
        });
        return questoes;
    }

    window.addEventListener("scroll", function() {
        var questoes = this.document.querySelector(".questao-choice");
        questoes.classList.toggle("questao-responsive", window.scrollY > 80);
    })

    // var menuQuestaoGlobal = document.querySelector(".question-list");
    // var questoes = document.querySelectorAll(".questions");
    // questoes.forEach(n => n.addEventListener("click", () => {
    //     menuQuestaoGlobal.classList.remove("question-list-responsive");
    // }))

    return (
        <aside className="questao-choice">
            <div id="question-menu" onClick={mouseclickQuestao}><p> {title} </p>
            <img id="arrow" src={arrow_down_url} alt="ONE"></img>
            </div>
            <ul className="question-list" type="none">
                {questaoLista(lista)}
            </ul>
        </aside>
    );
}

export default Aside;