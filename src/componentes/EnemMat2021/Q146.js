import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q146_EnemMat2021 = () => {
    const var1 = useElementDiv("CV");
    const var2 = useElementDiv("1,5\\; kg");
    const eq1 = useElementDiv("CV = \\frac{1}{10} = 0,1 = 10 \\%", "true");
    const eq2 = useElementDiv("0,1 > \\frac{1,5}{\\overline{m}}", "true");
    const eq3 = useElementDiv("\\overline{m} > \\frac{1,5}{0,1} =");
    const resp = useElementDiv("15\\; kg");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2021 - Prova de Matemática</h1>
                <h2>Questão 146</h2>
                <img src="./img/enem2021-img/enem-mat-2021-q146.jpeg" className="img-questao img-main" title="Questão 146 - Prova de Matemática; ENEM 2021"></img>
                <p>
                    O coeficiente de variação <span ref={var1}></span> mede o percentual do desvio padrão em relação à média. Se o coeficiente for 0,5, por exemplo, o desvio padrão é 50% do valor da média.
                </p>
                <p>O coeficiente de variação da ração atual é:</p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    O objetivo da zootecnista é obter uma ração que cause menos variação na massa dos coelhos. A nova ração possui um desvio padrão de <span ref={var2}></span>. Então, para que a nova ração tenha um coeficiente de variação menor, a média deve ser, no mínimo:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <div id="div-resp">
                    <div ref={eq3}></div>
                    <div id="resp-mat-q146" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q146_EnemMat2021;