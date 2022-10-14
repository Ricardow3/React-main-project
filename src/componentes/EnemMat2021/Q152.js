import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q152_EnemMat2021 = () => {
    const var1 = useElementDiv("x");
    const var2 = useElementDiv("\\ast");
    useConstLatex("a", "a-const", 2);
    const var4 = useElementDiv("r_i");
    const eq1 = useElementDiv("(a\\Delta b) = a^2 + a b - b^2", "true");
    const eq2 = useElementDiv("(b\\Delta a) = b^2 + a b - a^2", "true");
    const eq3 = useElementDiv("x \\ast y = xy + x = x(y + 1)", "true");
    const eq4 = useElementDiv("(a\\Delta b) = x");
    const eq5 = useElementDiv("(b\\Delta a) = y");
    const eq6 = useElementDiv("(a\\Delta b) \\ast (b\\Delta a) = (a^2 + a b - b^2)(b^2 + a b - a^2 + 1)", "true");
    const eq7 = useElementDiv("b = 1");
    const eq8 = useElementDiv("(a^2 + a -1)(-a^2 + a + 2) = 0", "true");
    const eq9 = useElementDiv("a^2 + a - 1 = 0 \\newline r_1 = \\frac{-1 + \\sqrt{5}}{2} \\quad r_2 = \\frac{-1 - \\sqrt{5}}{2}", "true");
    const eq10 = useElementDiv("-a^2 + a + 2 = 0 \\newline r_3 = 2 \\quad r_4 = -1", "true");
    const eq11 = useElementDiv("(a - r_1)(a - r_2)(a - r_3)(a - r_4) = 0", "true");
    const eq12 = useElementDiv("\\left(a + \\frac{1 - \\sqrt{5}}{2}\\right)\\left(a + \\frac{1 + \\sqrt{5}}{2}\\right)(a - 2)(a + 1) = 0", "true");
    const eq13 = useElementDiv("r_1 + r_3 = \\frac{-1 + \\sqrt{5}}{2} + 2 = ");
    const resp = useElementDiv("\\frac{3 + \\sqrt{5}}{2}");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2021 - Prova de Matemática</h1>
                <h2>Questão 152</h2>
                <img src="./img/enem2021-img/enem-mat-2021-q152.jpeg" className="img-questao img-main" title="Questão 152 - Prova de Matemática; ENEM 2021"></img>
                <p>
                    Para decifrar o valor recebido pelo navio é preciso resolver as duas operações definidas pelo sistema de codificação. Escrevemos separadamente os termos da equação a ser resolvida em função das operações:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>
                    Considerando então que <span style={{fontSize: 20}} ref={eq4}></span> &nbsp; e &nbsp; <span style={{fontSize: 20}} ref={eq5}></span>, substituimos esses termos na terceira equação acima:
                </p>
                <div style={{fontSize: 20}} ref={eq6}></div>
                <p>
                    Note que a soma com <span style={{fontSize: 20}}>1</span> no segundo termo é resultado da operação <span style={{fontSize: 20}} ref={var2}></span>, colocando-se o <span style={{fontSize: 20}} ref={var1}></span> em evidência.
                </p>
                <p>
                    Para <span style={{fontSize: 18}} ref={eq7}></span>, achamos as raízes resolvendo a equação:
                </p>
                <div style={{fontSize: 20}} ref={eq8}></div>
                <p>
                    Para que a expressão seja igual a 0, cada termo multiplicador deve ser igual a 0. Dessa forma, encontramos todas as soluções possíveis de <span style={{fontSize: 20}} className="a-const"></span> que resultam em zero na expressão. Igualando cada termo a 0, a solução para <span style={{fontSize: 20}} className="a-const"></span> são as raízes de cada equação. Encontramos as raízes das duas equações pela fórmula de Bhaskara:
                </p>
                <div style={{fontSize: 20}} ref={eq9}></div>
                <div style={{fontSize: 20}} ref={eq10}></div>
                <p>
                    Nas equações acima, <span style={{fontSize: 20}} ref={var4}></span> denotam as raízes das equações. O produto de dois polinômios de 2° grau formam um polinômio de 4° grau, portanto a equação tem 4 raízes.
                </p>
                <p>
                    Podemos escrever, de forma alternativa, um polinômio de mais alto grau em função das suas raízes, separando cada termo em polinômios de 1° grau. Esse processo é chamado de fatorização:
                </p>
                <div style={{fontSize: 20}} ref={eq11}></div>
                <div style={{fontSize: 18}} ref={eq12}></div>
                <p>
                    Como dito na questão, o valor recebido pelo navio é igual à soma das duas maiores raízes:
                </p>
                <div id="div-resp-q152">
                    <div ref={eq13}></div>
                    <div id="resp-mat-q152" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q152_EnemMat2021;