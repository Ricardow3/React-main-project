import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q142_EnemMat2021 = () => {
    const num1 = useElementDiv("\\frac{1}{2}");
    const num2 = useElementDiv("\\frac{1}{8}");
    const eq1 = useElementDiv("\\frac{1}{8} \\cdot 7 \\, = \\, \\frac{7}{8}", "true");
    const eq2 = useElementDiv("\\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{16}", "true");
    const eq3 = useElementDiv("\\frac{1}{16} \\cdot 15 = \\frac{15}{16}", "true");
    const eq4 = useElementDiv("\\frac{15}{16}\\approx 94 \\%");
    const eq5 = useElementDiv("\\frac{9}{10} \\approx 90 \\%");

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2021 - Prova de Matemática</h1>
                <h2>Questão 142</h2>
                <img src="./img/enem2021-img/Q142-img/enem-mat-2021-q142.jpeg" className="img-questao img-main" title="Questão 142 - Prova de Matemática; ENEM 2021"></img>
                <p>
                    Representamos o conjunto de todos os resultados possíveis &#40;espaço amostral&#41; pelos círculos vermelho e branco da figura abaixo. Cada círculo representa um lançamento. Se for vermelho, o jogador acertou o dardo no alvo. Caso contrário o círculo é branco. O conjunto fica:
                </p>
                <img src="./img/enem2021-img/Q142-img/arranjo-prob.svg" className="img-questao"></img>
                <p>
                    A probabilidade de acertar o alvo é de <span style={{fontSize: 20}} ref={num1}></span>. Portanto, a probabilidade de que qualquer conjunto distinto de três lançamentos ocorra é de <span style={{fontSize: 20}} ref={num2}></span>. Esse agrupamento é chamado de arranjo com repetição de elementos. Podemos observar que somente no último evento de probabilidade da figura o jogador não pontua. A probabilidade dele pontuar é a soma de todos os eventos que contém ao menos um círculo vermelho:
                </p>
                <div ref={eq1}></div>
                <p>
                    Mantendo as regras do jogo e aumentando a quantidade de dardos, observamos que a probabilidade do jogador não acertar o dardo no alvo nenhuma vez vai diminuindo quanto mais dardos são disponibilizados. Isso porque somente em um único evento de probabilidade o jogador não vai pontuar &#40;quando todos os círculos forem brancos&#41;.
                </p>
                <p>
                    Para quatro dardos, temos que a probabilidade de cada evento é:
                </p>
                <div ref={eq2}></div>
                <p>
                    O que daria como probabilidade de pontuar:
                </p>
                <div ref={eq3}></div>
                <p>
                    A probabilidade de <span ref={eq4}></span> já é maior que <span ref={eq5}></span>, portanto <strong className="strong-rose">4 dardos são a quantidade mínima</strong>.
                </p>
            </section>
        </div>
    )
}

export default Q142_EnemMat2021;