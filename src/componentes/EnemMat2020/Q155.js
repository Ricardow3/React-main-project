import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q155_EnemMat2020 = () => {
    const var1 = useElementDiv("n\\textrm{-ésimo}");
    const var2 = useElementDiv("n-1");
    const var3 = useElementDiv("q");
    const var4 = useElementDiv("\\frac{1}{2}");
    const eq1 = useElementDiv("a_1 \\xrightarrow{a_1 \\cdot q} a_2 \\xrightarrow{a_2 \\cdot q} a_3\\; ... \\; \\xrightarrow{a_{n-1} \\cdot q} a_n", "true");
    const eq2 = useElementDiv("a_1 \\xrightarrow{a_1 \\cdot q} a_2 \\xrightarrow{a_1 \\cdot q \\cdot q} a_3\\; ... \\; \\xrightarrow{a_1 \\cdot q^{n-1}} a_n", "true");
    const eq3 = useElementDiv("a_n = a_1 q^{n-1}", "true");
    const eq4 = useElementDiv("a_{100} = a_1 q^{100-1} =");
    const resp = useElementDiv("\\left(\\frac{1}{2}\\right) ^{99}");

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2020 - Prova de Matemática</h1>
                <h2>Questão 155</h2>
                <img src="./img/enem2020-img/enem-mat-2020-q155.jpeg" className="img-questao img-main" title="Questão 155 - Prova de Matemática; ENEM 2020"></img>
                <p>
                    Essa questão é um problema de progressão geométrica. A progressão geométrica é formada por termos que são resultado do produto do termo anterior por uma constante, denominada razão.
                </p>
                <p>
                    O <span ref={var1}></span> termo da progressão geométrica é obtido simplesmente multiplicando-se o primeiro termo pela razão <span ref={var2}></span> vezes:
                </p>
                <div className="div-eq-1">
                    <div style={{fontSize: 20}} ref={eq1}></div>
                    <div style={{fontSize: 20}} ref={eq2}></div>
                </div>
                <div style={{fontSize: 22}} ref={eq3}></div>
                <p>
                    Onde <span style={{fontSize: 20}} ref={var3}></span> é a razão da sequência.
                </p>
                <p>
                    Na questão, o lado diminui pela metade a cada termo seguinte, ou seja, a razão é <span style={{fontSize: 20}} ref={var4}></span>. O lado do centésimo quadrado fica:
                </p>
                <div id="div-resp-q155">
                    <div ref={eq4}></div>
                    <div id="resp-q155" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q155_EnemMat2020;