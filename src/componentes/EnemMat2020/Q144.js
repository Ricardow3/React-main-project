import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q144_EnemMat2020 = () => {
    const var1 = useElementDiv("\\dot{V}");
    const var2 = useElementDiv("V");
    const eq1 = useElementDiv("\\dot{V} = \\frac{V}{t}", "true");
    const eq2 = useElementDiv("\\dot{V} = \\frac{5 \\cdot 5 \\times 10^{-2}}{1} = 2,5 \\times 10^{-1} \\; \\frac{mL}{s}", "true");
    const eq3 = useElementDiv("\\frac{mL}{s} \\rightarrow \\frac{mL}{\\frac{h}{3600}} \\rightarrow 3600\\; \\frac{mL}{h}", "true");
    const eq4 = useElementDiv("\\dot{V} = 3600 \\cdot 2,5 \\times 10^{-1} = 900\\; \\frac{mL}{h}", "true");
    const eq5 = useElementDiv("(L \\rightarrow 1000\\; mL)");
    const eq6 = useElementDiv("t = \\frac{V}{\\dot{V}} = \\frac{9000}{900} = 10 =");
    const resp = useElementDiv("1 \\times 10^1 \\; h ");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2020 - Prova de Matemática</h1>
                <h2>Questão 144</h2>
                <img src="./img/enem2020-img/enem-mat-2020-q144.jpeg" className="img-questao img-main" title="Questão 144 - Prova de Matemática; ENEM 2020"></img>
                <p>
                    Calculamos a vazão volumétrica da torneira, que significa o volume de água despejado por unidade de tempo:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    <span ref={var1}></span> é a vazão volumétrica e <span ref={var2}></span> é o volume total despejado em um intervalo de tempo.
                </p>
                <p>
                    O volume despejado por segundo fica:
                </p>
                <div style={{fontSize: 18}} ref={eq2}></div>
                <p>
                    Convertemos a vazão de segundos para horas:
                </p>
                <div ref={eq3}></div>
                <p>
                    A vazão em horas fica:
                </p>
                <div style={{fontSize: 18}} ref={eq4}></div>
                <p>
                    Para o balde encher, é necessário completar os 9 litros que restam. Convertendo de litros para mililitros <span ref={eq5}></span> e isolando o tempo na equação:
                </p>
                <div id="div-resp-q144">
                    <div ref={eq6}></div>
                    <div id="resp-q144" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q144_EnemMat2020;