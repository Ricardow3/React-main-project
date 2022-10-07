import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q16_unicamp2022 = () => {
    const var1 = useElementDiv("n");
    const eq1 = useElementDiv("M = \\sqrt[n]{a_1 a_2 a_3\\; ...\\; a_n}", "true");
    const eq2 = useElementDiv("M = \\sqrt[23]{1\\cdot 10\\cdot 100\\cdot 1000\\; ...\\; 10^{22}}", "true");
    const eq3 = useElementDiv("M = \\sqrt[23]{10^0 10^1 10^2 10^3\\; ...\\; 10^{22}}", "true");
    const eq4 = useElementDiv("M = \\sqrt[23]{10^{0 + 1 + 2 + 3 +...+22}}", "true");
    const eq5 = useElementDiv("\\textrm{Progressão aritmética:}\\quad 0,1,2,3...22", "true");
    const eq6 = useElementDiv("\\textrm{Soma:}\\quad S = \\frac{n(n+1)}{2} = \\frac{22(22+1)}{2} = 11\\cdot 23", "true");
    const eq7 = useElementDiv("M = \\sqrt[23]{10^{11\\cdot 23}} = {10^{\\frac{11\\cdot \\cancel{23}}{\\cancel{23}}} } =");
    const resp = useElementDiv("10^{11}");

    return (
        <div>
            <section className="body-texto">
                <h1>Unicamp 2022 - Prova de Matemática</h1>
                <h2>Questão 16</h2>
                <img src="./img/unicamp2022-img/unicamp-mat-2022-q16.jpeg" className="img-questao img-main" title="Questão 16 - Prova de matemática; Unicamp 2021"></img>
                <p>
                    A média geométrica é dada pela expressão:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    Aplicando os valores da sequência:
                </p>
                <div style={{fontSize: 18}} ref={eq2}></div>
                <p>
                    O expoente da raiz é 23, pois a sequência tem 23 termos contando com o 1. <br /> Transformando os números em potências de 10:
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <div style={{fontSize: 20}} ref={eq4}></div>
                <p>
                    A sequência de expoentes formam uma progressão aritmética. A soma de <span style={{fontSize: 20}} ref={var1}></span> termos dessa sequência é:
                </p>
                <div ref={eq5}></div>
                <div style={{fontSize: 18}} ref={eq6}></div>
                <p>
                    A média então fica:
                </p>
                <div id="div-resp-q16">
                    <div ref={eq7}></div>
                    <div id="resp-eq16" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q16_unicamp2022;