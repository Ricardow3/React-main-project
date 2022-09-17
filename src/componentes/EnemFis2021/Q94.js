import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q94_EnemFis2021 = () => {
    const var1 = useConstLatex("V_0", "vel-inicial-q94", 5);
    const var2 = useConstLatex("\\theta", "theta", 2);
    const var3 = useConstLatex("V_{X0}", "vel-inicial-x", 2);
    const var4 = useConstLatex("V_{Y0}", "vel-inicial-y", 2);
    const var5 = useConstLatex("S_X", "s-x", 2);
    const var6 = useConstLatex("S_Y", "s-y", 2);
    const eq1 = useElementDiv("V_{X0} = \\frac{S_X}{t} \\quad \\therefore \\quad t = \\frac{S_X}{V_{X0}}", "true");
    const eq2 = useElementDiv("S_Y = V_{Y0} t + \\frac{g t^2}{2}", "true");
    const eq3 = useElementDiv("V_{X0} = V_0 \\cos{\\theta}", "true");
    const eq4 = useElementDiv("V_{Y0} = V_0 \\sin{\\theta}", "true");
    const eq5 = useElementDiv("t = \\frac{S_X}{V_0 \\cos{\\theta}}", "true");
    const resp = useElementDiv("= 40\\, m/s");

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2021 - Prova de Física</h1>
                <h2>Questão 94</h2>
                <img src="./img/enemfis2021-img/Q94-img/enem-fis-2021-q94.jpeg" className="img-questao img-main" title="Questão 94 - Prova de Física; ENEM 2021"></img>
                <p>
                    Essa questão envolve um lançamento oblíquo. Nesse movimento, a trajetória do corpo tem a forma de uma parábola, ou seja, uma equação de segundo grau. O movimento parabólico é a soma de dois movimento: O movimento retilíneo uniformemente variado &#40;MRUV&#41; e o movimento retilíneo uniforme &#40;MRU&#41;. Nesse tipo de trajetória é desconsiderado a força de resistência do ar.
                </p>
                <p>
                    A questão define o ângulo de lançamento e o deslocamento vertical e horizontal até a posição final, no canhão <strong>A</strong>.
                </p>
                <img src="./img/enemfis2021-img/Q94-img/parabolic_curve.svg" className="img-questao"></img>
                <p>
                    Como a trajetória da bala tangencia o ponto <strong>P</strong>, qualquer velocidade menor do que <span className="vel-inicial-q94"></span> com o mesmo ângulo de lançamento <span style={{fontSize: 20}} className="theta"></span> irá atingir a colina antes de alcançar o outro canhão.
                </p>
                <p>
                    Considerando: <br /> <span className="vel-inicial-q94"></span> a velocidade inicial da bala, <br /> <span className="vel-inicial-x"></span> e <span className="vel-inicial-y"></span>, respectivamente, as projeções da velocidade inicial em <span className="italic">X</span> e <span className="italic">Y</span>, <br />
                    <span className="s-x"></span> e <span className="s-y"></span>, respectivamente, os deslocamentos em <span className="italic">X</span> e <span className="italic">Y</span>.
                </p>
                <p>
                    Podemos decompor a trajetória da bala nos dois movimentos: um em <span className="italic">X</span> e o outro em <span className="italic">Y</span>. O que os dois movimentos têm em comum é o tempo até atingir a posição final. As equações são:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                    As componentes <span className="vel-inicial-x"></span> e <span className="vel-inicial-y"></span> dependem do ângulo <span style={{fontSize: 20}} className="theta"></span>:
                </p>
                <div ref={eq3}></div>
                <div ref={eq4}></div>
                <p>Portanto,</p>
                <div ref={eq5}></div>
                <p>
                    Substituindo a equação do tempo em função de <span className="vel-inicial-q94"></span> na equação do MRUV, encontramos:
                </p>
                <img src="./img/enemfis2021-img/Q94-img/equation_1_q94.svg" className="img-questao img-q94-1"></img>
                <p>
                    Chegamos em uma equação que relaciona a velocidade inicial <span className="vel-inicial-q94"></span> com os deslocamentos <span className="s-x"></span> e <span className="s-y"></span>.
                </p>
                <p>
                    Para resolver a equação corretamente é necessário adotar um referencial. Consideramos os vetores positivos como sendo verticais para cima. Nesse caso a aceleração gravitacional é negativa. Substituindo os valores dados na questão:
                </p>
                <img src="./img/enemfis2021-img/Q94-img/equation-q94-2.svg" className="img-questao img-q94-2"></img>
                <p>
                    Isolando <span className="vel-inicial-q94"></span> encontramos:
                </p>
                <img src="./img/enemfis2021-img/Q94-img/equation-q94-3.svg" className="img-questao"></img>
                <div id="resp-fis-q94" ref={resp}></div>
            </section>
        </div>
    )
}

export default Q94_EnemFis2021;