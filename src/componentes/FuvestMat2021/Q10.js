import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q10_fuvest2021 = () => {
    useConstLatex("a", "a-const", 2);
    useConstLatex("b", "b-const", 2);
    const var1 = useElementDiv("x");
    const var2 = useElementDiv("y");
    const eq1 = useElementDiv("x^2 + y^2 = R^2", "true");
    const eq2 = useElementDiv("x^2 + y^2 = 1", "true");
    const eq3 = useElementDiv("x^2 + y^2 \\leq 1", "true");
    const eq4 = useElementDiv("y = ax + b", "true");
    const eq5 = useElementDiv("ax + by = 1", "true");
    const eq6 = useElementDiv("y = ax + b");
    const eq7 = useElementDiv("ax + by = 1");
    const eq8 = useElementDiv("-1a + 0y = 1 \\quad \\therefore \\quad a = -1", "true");
    const eq9 = useElementDiv("0a + 1b = 1 \\quad \\therefore \\quad b = 1", "true");
    const eq10 = useElementDiv("y - x = 1", "true");
    const eq11 = useElementDiv("y - x \\geq 1");
    const resp = useElementDiv("x^2 + y^2 \\leq 1 \\quad e \\quad y - x \\geq 1");   
    
    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Matemática</h1>
                <h2>Questão 10</h2>
                <img className="img-questao img-main" src="./img/fuvest2021-img/Q10-img/fuvest-mat-2021-Q10.jpeg" title="Questão 10 - Prova de Matemática; FUVEST 2021"></img>
                <p>
                Para encontrar a região hachurada, é necessário calcular a equação do círculo que delimita a região por cima, e então calcular a equação da reta que delimita a região por baixo.
                A equação do círculo com centro na origem <math><mo>&#40;</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>&#41;</mo></math> é descrita como &nbsp;
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>Onde <math><mi>R</mi></math> corresponde ao raio do círculo. Como <math><mi>R</mi><mo>=</mo><mn>1</mn></math>, a equação fica </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                A região interna do círculo corresponde a todos os pontos no espaço cuja distância em relação ao centro &#40;raio&#41; são menores que ou igual ao raio do círculo, portanto 
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>
                Para encontrar a equação da reta, basta utilizar a equação geral da reta
                <div style={{fontSize: 20}} ref={eq4}></div> 
                Essa equação também pode ser escrita como 
                <div style={{fontSize: 20}} ref={eq5}></div>
                Nesse caso os coeficientes <span style={{fontSize: 20}} className="a-const"></span> e <span style={{fontSize: 20}} className="b-const"></span> são diferentes daqueles encontrados pela equação mais convencional &nbsp;
                <span style={{fontSize: 20}} ref={eq6}></span>.
                </p>
                <p id="parag">
                É necessário conhecer <div id="span-mobile">duas variáveis <span>Podem ser dois pontos que pertencem à reta ou um ponto e o ângulo de inclinação</span> </div> para resolver qualquer uma das equações acima, já que elas possuem as duas variáveis <span style={{fontSize: 20}} className="a-const"></span> e <span style={{fontSize: 20}} className="b-const"></span>.
                </p>
                <p>
                Os dois pontos que pertencem a reta e podem ser identificados pela figura são as intersecções da reta com os eixo <span style={{fontSize: 20}} ref={var1}></span> e <span style={{fontSize: 20}} ref={var2}></span>, ou seja, <math><mo>&#40;</mo><mn><mo>-</mo>1</mn><mo>,</mo><mn>0</mn><mo>&#41;</mo></math> e <math><mo>&#40;</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>&#41;</mo></math>.
                </p>
                <p>
                Aplicando os valores dos pontos na equação geral &nbsp;
                <span style={{fontSize: 20}} ref={eq7}></span>:
                <div style={{fontSize: 20}} ref={eq8}></div>
                <div style={{fontSize: 20}} ref={eq9}></div>
                </p>
                <p>
                Finalmente, aplicando os valores encontrados na equação acima: 
                <div style={{fontSize: 20}} ref={eq10}></div>
                </p>
                <p>
                A região hachurada se encontra acima da reta, portanto os pontos que pertencem a região satisfazem a inequação &nbsp;
                <div style={{display: 'inline'}} ref={eq11}></div>.
                </p> 
                <p>A intersecção das duas inequações formam a região: 
                <div id="resposta-q10" ref={resp}></div>
                </p>
            </section>
        </div>
    )
}

export default Q10_fuvest2021;