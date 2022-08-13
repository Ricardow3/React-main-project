import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q53_ufrgs2022 = () => {
    useConstLatex("\\alpha", "alpha-q53", 3);
    useConstLatex("\\beta", "beta-q53", 7);
    useConstLatex("\\frac{\\text{a}}{2}", "raio%2-q53", 3);
    useConstLatex("T , \\; \\Upsilon \\; \\text{\\footnotesize{e}} \\; \\Phi ", "tau-ups-phi", 2);
    const eq1 = useElementDiv("\\alpha = \\frac{\\pi \\left(\\frac{a}{2} \\right)^2}{4} -  \\frac{\\left(\\frac{a}{2} \\right)^2}{2} ", "true");
    const eq2 = useElementDiv("\\alpha = \\frac{\\pi a^2}{16} - \\frac{a^2}{8} = \\frac{a^2 (\\pi - 2)}{16} ", "true");
    const eq3 = useElementDiv("\\beta = T - \\Upsilon - \\Phi + \\alpha ", "true");
    const eq4 = useElementDiv("\\beta = \\frac{\\pi a^2}{4} - \\frac{\\pi a^2}{8} - \\frac{\\pi \\left(\\frac{a}{2}\\right)^2}{2} + \\alpha ", "true");
    const eq5 = useElementDiv("\\beta = \\cancel{\\frac{\\pi a^2}{8}} - \\cancel{\\frac{\\pi a^2}{8}} + \\alpha \\quad \\therefore \\quad \\beta = \\alpha ", "true");
    const eq6 = useElementDiv("\\beta + \\alpha");
    const eq7 = useElementDiv("\\beta + \\alpha = 2 \\left(\\frac{a^2 (\\pi - 2)}{16}\\right) = ");
    const resp = useElementDiv("\\frac{a^2(\\pi - 2)}{8} ");

    return (
        <section className="body-texto">
            <h1>UFRGS 2022 - Prova de Matemática</h1>
            <h2>Questão 53</h2>
            <img className="img-questao img-main" src="./img/ufrgs2022-img/Q53-img/ufrgs-mat-2022-Q53.png" title="Questão 53 - Prova de matemática; UFRGS 2022"></img>
            <p>
                Essa questão parece complexa, mas pode ser resolvida por partes, dividindo os segmentos de área mostrados e somando-os para encontrar as áreas resultantes. Através dessa abordagem, divivimos as áreas relevantes e designamos com uma variável qualquer, como mostrado abaixo.
            </p>
            <img className="img-questao" src="./img/ufrgs2022-img/Q53-img/geometrias_1.svg" title="Segmentos de área sombreados da questão"></img>
            <img className="img-questao" src="./img/ufrgs2022-img/Q53-img/geometrias_2.svg" title="Segmentos de área auxiliares"></img>
            <p>As áreas sombreadas da questão aparecem em azul e são designadas como <span style={{fontSize: 20}} className="alpha-q53"></span> e <span style={{fontSize: 20}} className="beta-q53"></span>. A medida da aresta do quadrado é <strong style={{fontSize: 20}}>a</strong>. </p>
            <p>As áreas em amarelo claro são auxiliares e são utilizadas para um melhor entendimento, a partir delas se obtém a área <span style={{fontSize: 20}} className="beta-q53"></span>.</p>
            <p>
                Primeiramente, é calculada a área <span style={{fontSize: 20}} className="alpha-q53"></span> subtraindo o arco da circunferência de raio <span style={{fontSize: 20}} className="raio%2-q53"></span> pela área do triângulo retângulo cujos catetos são <span style={{fontSize: 20}} className="raio%2-q53"></span>. Como o arco possui 90°, a área equivale à <math style={{fontSize: 20}}><mfrac><mn>1</mn><mn>4</mn></mfrac></math> da circunferência:
            </p>
            <div style={{fontSize: 20}} ref={eq1}></div>
            <div style={{fontSize: 20}} ref={eq2}></div>
            <p>
                Em seguida, calcula-se a área <span style={{fontSize: 20}} className="beta-q53"></span> a partir da subtração das áreas auxiliares, designadas por <span style={{fontSize: 20}} className="tau-ups-phi"></span>. O segmento de área <span style={{fontSize: 20}} className="beta-q53"></span> é resultado da subtração das áreas auxiliares mais a soma da área <span style={{fontSize: 20}} className="alpha-q53"></span>, como mostrado na equação abaixo:
            </p>
            <div style={{fontSize: 22}} ref={eq3}></div>
            <img className="img-questao" src="./img/ufrgs2022-img/Q53-img/geometrias_3.svg" title="Segmento de área em verde é resultado da subtração dos outros segmentos"></img>
            <p>
                As áreas <span style={{fontSize: 20}} className="tau-ups-phi"></span> são todas arcos de circunferência. O valor de <span style={{fontSize: 20}} className="beta-q53"></span> fica:
            </p>
            <div style={{fontSize: 20}} ref={eq4}></div>
            <p>O valor de <span style={{fontSize: 20}} className="beta-q53"></span> poderia ser obtido, alternativamente, subtraindo-se o arco de 45° &#40;com raio <strong style={{fontSize: 20}}>a</strong>&#41; do triângulo retângulo e do arco de 90° &#40;com raio <strong style={{fontSize: 20}} className="raio%2-q53"></strong>&#41; mostrados na primeira figura. São formas equivalentes de se obter o mesmo resultado.</p>
            <p>Resolvendo para <span style={{fontSize: 20}} className="beta-q53"></span> a equação acima:</p>
            <div style={{fontSize: 20}} ref={eq5}></div>
            <p>A área total sombreada equivale à <span style={{fontSize: 20}} ref={eq6}></span>:</p>
            <div id="div-respq53">
                <div ref={eq7}></div>
                <div id="resposta-q53" ref={resp}></div>
            </div>
        </section>
    )
}

export default Q53_ufrgs2022;