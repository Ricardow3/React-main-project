import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q16_fuvest2020 = () => {
    useConstLatex("x + y \\footnotesize{\\cos(\\theta)}", "base-size", 2);
    useConstLatex("\\theta", "theta", 2);
    const var2 = useElementDiv("y\\cos(\\theta)");
    const var3 = useElementDiv("A_p");
    const var5 = useElementDiv("x");
    const var6 = useElementDiv("h");
    const eq1 = useElementDiv("A_p = \\bigl[\\, x + y\\cos(\\theta) \\, \\bigr] h - \\left( \\frac{y\\cos(\\theta)h}{2} + \\frac{y\\cos(\\theta)h}{2} \\right)", "true");
    const eq2 = useElementDiv("A_p = xh + \\cancel{y\\cos(\\theta)h} - \\cancel{y\\cos(\\theta)h}", "true");
    const eq3 = useElementDiv("h = y \\sin(\\theta)", "true");
    const eq4 = useElementDiv("A_p = x y \\sin(\\theta)", "true");
    const eq5 = useElementDiv("A = xy");
    const eq6 = useElementDiv("A_p = \\frac{A}{2}");
    const eq7 = useElementDiv("\\frac{A}{2} = xy \\sin(\\theta) \\quad \\therefore \\quad \\frac{\\cancel{xy}}{2} = \\cancel{xy} \\sin(\\theta)", "true");
    const eq8 = useElementDiv("\\sin(\\theta) = \\frac{1}{2}", "true");
    const resp = useElementDiv("\\theta = 30°");

    return (
        <section className="body-texto">
            <h1>Fuvest 2020 - Prova de Matemática</h1>
            <h2>Questão 16</h2>
            <img className="img-questao img-main" src="./img/fuvest2020-img/q16-img/fuvest-mat-2020-q16.jpeg" title="Questão 16 - Prova de matemática; FUVEST 2020"></img>
            <p>
                Começamos deduzindo a fórmula para calcular a área do paralelogramo. As variáveis necessárias são descritas na imagem abaixo.
            </p>
            <img className="img-questao" src="./img/fuvest2020-img/q16-img/paralelogramo.svg" title="Descrição do paralelogramo"></img>
            <p>
                Uma forma de encontrar a área do paralelogramo é calcular a área do retângulo de base&nbsp; <span className="base-size" style={{fontSize: 20}}></span> &nbsp;e substrair das áreas dos dois triângulos retângulos de base&nbsp; <span style={{fontSize: 18}} ref={var2}></span>. Sendo a área do paralelogramo igual a <span style={{fontSize: 18}} ref={var3}></span>, a equação fica: 
            </p>
            <div style={{fontSize: 20}} ref={eq1}></div>
            <p>
                O primeiro termo corresponde a área do retângulo de base&nbsp; <span className="base-size" style={{fontSize: 20}}></span>. O segundo termo é a área total dos dois triângulos formados pela projeção do ângulo <span className="theta" style={{fontSize: 18}}></span>. Simplificando: 
            </p>
            <div style={{fontSize: 20}} ref={eq2}></div>
            <p>
                Portanto, a área do paralelogramo é igual a área do retângulo de base <span style={{fontSize: 20}} ref={var5}></span> e altura <span style={{fontSize: 20}} ref={var6}></span>. Podemos, então, escrever a área em função dos lados do paralelogramo e do ângulo de inclinação:
            </p>
            <div style={{fontSize: 20}} ref={eq3}></div>
            <div style={{fontSize: 22}} ref={eq4}></div>
            <p>
                Na questão, a área do paralelogramo é igual a metade da área do retângulo. O paralelogramo possui lados iguais ao do retângulo, já que os vértices agem como articulações.
            </p>
            <p>Sendo <span style={{fontSize: 18}} ref={eq5}></span> &nbsp;e&nbsp; <span style={{fontSize: 18}} ref={eq6}></span>, a área do paralelogramo fica:</p>
            <div ref={eq7}></div>
            <div style={{fontSize: 20}} ref={eq8}></div>
            <p>Para <span className="theta" style={{fontSize: 18}}></span> entre 0 e 90°, a solução é&nbsp; <span id="resposta" ref={resp}></span> </p>

        </section>
    )
}

export default Q16_fuvest2020;