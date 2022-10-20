import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q146_EnemMat2020 = () => {
    const var1 = useElementDiv("h");
    const var2 = useElementDiv("b");
    const eq1 = useElementDiv("h = 16");
    const eq2 = useElementDiv("\\begin{cases} (32 + b - 63,5) \\leq 1,5 \\newline -(32 + b - 63,5) \\leq 1,5 \\end{cases}", "true");
    const eq3 = useElementDiv("\\begin{cases} b - 31,5 \\leq 1,5 \\newline -b + 31,5 \\leq 1,5 \\end{cases}", "true");
    const eq4 = useElementDiv("b \\leq 33");
    const eq5 = useElementDiv("-b \\leq -30 \\quad \\therefore \\newline b \\geq 30", "true");
    const resp = useElementDiv("30 \\leq b \\leq 33");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2020 - Prova de Matemática</h1>
                <h2>Questão 146</h2>
                <img src="./img/enem2020-img/enem-mat-2020-q146.jpeg" className="img-questao img-main" title="Questão 146 - Prova de Matemática; ENEM 2020"></img>
                <p>
                    Considerando <span style={{fontSize: 18}} ref={var1}></span> fixo, a inequação define um intervalo no qual <span style={{fontSize: 18}} ref={var2}></span> deve pertencer para que as dimensões sejam válidas. Como a inequação envolve uma função modular, existem dois valores que satisfazem essa inequação.
                </p>
                <p>
                    Para <span style={{fontSize: 18}} ref={eq1}></span>, as soluções ficam:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>
                    A primeira inequação resulta em <span style={{fontSize: 18}} ref={eq4}></span>, já a segunda inequação fica
                </p>
                <div style={{fontSize: 18}} ref={eq5}></div>
                <p>
                     A relação de desigualdade é invertida quando a inequação é multiplicada por <math><mo>-</mo><mn>1</mn></math>.
                </p>
                <p>
                    A solução fica:
                </p>
                <div id="resp-q146" ref={resp}></div>
            </section>
        </div>
    )
}

export default Q146_EnemMat2020;