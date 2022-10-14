import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q13_fuvest2021 = () => {
    const eq1 = useElementDiv("\\frac{1}{4}");
    const eq2 = useElementDiv("\\frac{1}{8}");
    const eq3 = useElementDiv("x \\quad \\longrightarrow \\quad a_p", "true");
    const eq4 = useElementDiv("1 \\quad \\longrightarrow \\quad 360°", "true");
    const eq5 = useElementDiv("x = \\frac{a_p}{360}", "true");
    const eq6 = useElementDiv("a_p");
    const eq7 = useElementDiv(" 40.000 \\cdot \\left( \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{4} \\right) =", "true");
    const resp = useElementDiv("25.000 \\, km");

    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Matemática</h1>
                <h2>Questão 13</h2>
                <img className="img-questao img-main" src="./img/fuvest2021-img/Q13-img/fuvest-mat-2021-Q13.jpeg" title="Questão 13 - Prova de Matemática; FUVEST 2021"></img>
                <p>
                    Como a terra é considerada perfeitamente esférica, a medida da circunferência em qualquer direção &#40;meridianos e linha do equador&#41; é a mesma.
                    Os três trajetos descritos na questão podem ser calculados, portanto, pelo mesmo comprimento de circunferência, como mostrado na imagem abaixo.
                </p>
                <img className="img-questao img-sphere" src="./img/fuvest2021-img/Q13-img/Q13_sphere.svg" title="Esfera descrevendo a trajetória percorrida"></img>
                <p>
                    O primeiro trajeto vai do Polo Norte até a linha do equador, percorrendo um ângulo de <math><mn>90</mn><mo>°</mo></math>, equivalente a <div style={{display: 'inline'}} ref={eq1}></div> da circunferência da esfera.
                </p>
                <p>
                    O segundo trajeto percorre ao longo da linha do equador um ângulo de <math><mn>45</mn><mo>°</mo></math>, equivalente a <div style={{display: 'inline'}} ref={eq2}></div> da circunferência.
                </p>
                <p>
                    Para calcular a fração equivalente da circunferência a partir do ângulo, basta aplicar a regra de 3: 
                </p>
                <div id="equations-q13">
                    <div>
                    <div style={{fontSize: 20}} ref={eq3}></div>
                    <div ref={eq4}></div>
                    </div>
                    <div style={{fontSize: 20}} ref={eq5}></div>
                </div>
                <p>
                    Onde <div style={{display: 'inline'}} ref={eq6}></div> é o ângulo percorrido.
                </p>
                <p>
                    O terceiro trajeto é equivalente ao primeiro. Somando os três, o comprimento total percorrido é:
                </p>
                <div id="eq-q13">
                    <div ref={eq7}></div>
                    <div id="resp-q13" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q13_fuvest2021;