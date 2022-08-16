import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q15_fuvest2020 = () => {
    const var1 = useElementDiv("n");
    const var2 = useElementDiv("R_e");
    const var3 = useElementDiv("E");
    const var4 = useElementDiv("L");
    const eq1 = useElementDiv("\\text{\\footnotesize{Para}}\\; n = 100: \\newline R_e = 100 \\cdot 0,01 + 3\\; =\\; 4\\, cm ", "true");
    const eq2 = useElementDiv("E = \\pi 4^2 - \\pi 3^2 = 7 \\pi ", "true");
    const eq3 = useElementDiv("7 \\pi = 0,01\\, L", "true");
    const resp = useElementDiv("L \\approx 2200\\, cm");
    

    return (
        <section className="body-texto">
            <h1>Fuvest 2020 - Prova de Matemática</h1>
            <h2>Questão 15</h2>
            <img className="img-questao img-main" src="./img/fuvest2020-img/q15-img/fuvest-mat-2020-q15.png" title="Questão 15 - Prova de Matemática; Fuvest 2020"></img>
            <p>
                Para resolver esse problema é dito na questão que o raio do rolo aumenta no valor da espessura da fita, a cada volta que é a fita é dada. Essa consideração é importante pois, rigorosamente falando, o raio do rolo aumenta de forma contínua conforme a fita é enrolada, em um formato de espiral.
            </p>
            <p>Consideramos então que o rolo é formado por pedaços de fita separados, sobrepostos uns aos outros, e cada um deles com uma espessura de 0,01 cm.</p>
            <img className="img-questao" src="./img/fuvest2020-img/q15-img/rolo.svg" title="Esquema simplificado do enrolamento da fita"></img>
            <p>
                Seja <span style={{fontSize: 20}} ref={var1}></span> o número de voltas completas, <span style={{fontSize: 20}} ref={var2}></span> o raio externo e <span style={{fontSize: 20}} ref={var3}></span> a espessura do rolo &#40;área lateral gerada pela sobreposição das fitas&#41;, então:
            </p>
            <div style={{fontSize: 18}} ref={eq1}></div>
            <p>O raio externo é a soma do raio interno &#40;3 cm&#41; e da espessura do rolo &#40;número de voltas &#215; espessura da fita&#41;. A espessura do rolo fica:</p>
            <div style={{fontSize: 20}} ref={eq2}></div>
            <p>
                O comprimento total da fita é calculado através da espessura do rolo, já que a fita quando desenrolada deve manter a sua área lateral constante. A área lateral da fita desenrolada é igual ao comprimento da fita vezes a sua espessura, seja o comprimento igual a <span style={{fontSize: 20}} ref={var4}></span>, então:
            </p>
            <div style={{fontSize: 20}} ref={eq3}></div>
            <div id="resposta-q15" ref={resp}></div>
        </section>
    )
}

export default Q15_fuvest2020;