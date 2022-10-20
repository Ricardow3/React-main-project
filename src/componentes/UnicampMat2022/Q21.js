import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q21_unicamp2022 = () => {
    const var1 = useElementDiv("R,\\; P\\; \\textrm{e}\\; S");
    const var2 = useElementDiv("n");
    useConstLatex("k", "k-const", 2);
    const eq1 = useElementDiv("A_{(n,k)} = n^k = 3^2 = 9\\; \\textrm{eventos}", "true");
    const eq2 = useElementDiv("\\frac{3}{9} \\cdot \\frac{3}{9} \\cdot \\frac{3}{9} = \\frac{27}{729} = \\frac{1}{27}", "true");
    const eq3 = useElementDiv("\\frac{3}{9}");
    const eq4 = useElementDiv("\\frac{3}{9} \\frac{3}{9} \\frac{3}{9} + \\frac{3}{9} \\frac{3}{9} \\frac{6}{9} + \\frac{3}{9} \\frac{6}{9} \\frac{6}{9} + \\frac{6}{9} \\frac{3}{9} \\frac{6}{9} +", "true");
    const eq5 = useElementDiv("+ \\frac{6}{9} \\frac{3}{9} \\frac{3}{9} + \\frac{3}{9} \\frac{6}{9} \\frac{3}{9} + \\frac{6}{9} \\frac{6}{9} \\frac{3}{9} + \\xcancel{\\frac{6}{9} \\frac{6}{9} \\frac{6}{9}}", "true");
    const eq6 = useElementDiv("\\frac{1 + 3\\cdot 2 + 3\\cdot 4}{3\\cdot 3 \\cdot 3} = \\frac{1 + 6 + 12}{27} =", "true");
    const resp = useElementDiv("\\frac{19}{27}");
    

    return (
        <div>
            <section className="body-texto">
                <h1>Unicamp 2022 - Prova de Matemática</h1>
                <h2>Questão 21</h2>
                <img src="./img/unicamp2022-img/Q21-img/unicamp-mat-2022-q21.jpeg" className="img-questao img-main" title="Questão 21 - Prova de Matemática; Unicamp 2021"></img>
                <p>
                    A figura abaixo mostra o espaço amostral de probabilidade &#40;conjunto de combinações possíveis&#41;. Cada um dos resultados possíveis é chamado de evento de probabilidade.
                </p>
                <div className="div-img-large">
                    <img src="./img/unicamp2022-img/Q21-img/rock-paper-scissors.svg" className="img-questao"></img>
                </div>
                <p>
                    Percebemos que existem 9 eventos possíveis. Na figura, <span ref={var1}></span> representam, respectivamente, os elementos pedra, papel e tesoura. Essa forma de arranjo dos elementos é um tipo de permutação, chamada de arranjo com repetição. A quantidade de arranjos possíveis é calculada pelo número de elementos <span style={{fontSize: 20}} ref={var2}></span> agrupados de <span style={{fontSize: 20}} className="k-const"></span> em <span style={{fontSize: 20}} className="k-const"></span>:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    Desses 9 eventos, somente 3 são empates. Para calcular a probabilidade de ocorrer ao menos um empate em três partidas, consideramos todas as combinações possíveis de resultados em três partidas. Como interessa somente saber se as combinações resultam em empates ou não, podemos calcular a probabilidade de ocorrem três empates, dois ou somente um empate.
                </p>
                <p>
                    A combinação de três resultados que satisfazem determinadas condições ao mesmo tempo é calculada pelo produto das probabilidades de cada resultado. Para um conjunto de resultados a expressão fica da seguinte forma:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                    Nessa expressão, a probabilidade de ocorrer empate em uma única partida é de <span style={{fontSize: 22}} ref={eq3}></span>. Então, a probabilidade de ocorrer empate na primeira partida <span className="blue-strong">e</span> na segunda partida <span className="blue-strong">e</span> na terceira partida é dada pelo produto de todos esses <span id="span">eventos maiores <span>Um evento pode ser a ocorrência de empates ou a ocorrência de resultados específicos</span></span>.
                </p>
                <p>
                    O espaço amostral resultante das três partidas pode ser definido, de forma reduzida, a partir de empates ou não empates. O conjunto fica da seguinte forma:
                </p>
                <div ref={eq4}></div>
                <div ref={eq5}></div>
                <p>
                    A soma de todos esses eventos de probabilidade resulta em todos os resultados possíveis. Somente o último evento de probabilidade não resulta em ao menos um empate.
                </p>
                <p>
                    Simplificamos todas as frações dividindo por 3 no numerador e no denominador. O resultado fica:
                </p>
                <div id="div-resp-q21">
                    <div ref={eq6}></div>
                    <div id="resp-q21" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q21_unicamp2022;