import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q152_EnemMat2020 = () => {
    const var1 = useElementDiv("V_1");
    const var2 = useElementDiv("V_2");
    const var3 = useElementDiv("b_1");
    const var4 = useElementDiv("b_2");
    const var5 = useElementDiv("h_1");
    const var6 = useElementDiv("h_2");
    useConstLatex("p", "p-const", 3);
    const var8 = useElementDiv("(V_{A1})");
    const var9 = useElementDiv("(V_{A2})");
    const var10 = useElementDiv("p_1 = 15\\%");
    const var11 = useElementDiv("p_2 = 10\\%");
    const var12 = useElementDiv("h_1 = x");
    const var13 = useElementDiv("h_2 = y");
    const eq1 = useElementDiv("V_1 + V_{ar} = V_2", "true");
    const eq2 = useElementDiv("V_{ar} = V_1 p", "true");
    const eq3 = useElementDiv("b_1 = cL \\quad e \\quad b_2 = \\frac{c}{\\cancel{2}} \\cancel{2}L = cL", "true");
    const eq4 = useElementDiv("b_1 = b_2", "true");
    const eq5 = useElementDiv("\\cancel{b_1} h_1 + \\cancel{b_1} h_1 p = \\cancel{b_2} h_2", "true");
    const eq6 = useElementDiv("h_1 (1 + p) = h_2", "true");
    const eq7 = useElementDiv("V_1(1 + p_1) = V_{A1} \\newline V_{A1}(1 + p_2) = V_{A2} = V_2", "true");
    const eq8 = useElementDiv("V_1(1+ 0,15) = 1,15 V_1 \\newline 1,15 V_1 (1 + 0,1) = 1,15 \\cdot 1,1 V_1 = V_2", "true");
    const eq9 = useElementDiv("V_2 = \\left(\\frac{1,15}{10} + 1,15\\right) V_1 \\quad \\therefore", "true");
    const eq10 = useElementDiv("V_2 = (0,115 + 1,15) V_1 \\quad \\therefore", "true");
    const eq11 = useElementDiv("V_2 = 1,265 V_1", "true");
    const resp = useElementDiv("y = 1,265 x");
    const eq12 = useElementDiv("h_1(1 + p) = h_2");
    const eq13 = useElementDiv("p = p_1 + p_2 + p_1 p_2", "true");
    const eq14 = useElementDiv("p = 0,15 + 0,1 + 0,15 \\cdot 0,1", "true");
    const eq15 = useElementDiv("p = 1,265", "true");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2020 - Prova de Matemática</h1>
                <h2>Questão 152</h2>
                <img src="./img/enem2020-img/enem-mat-2020-q152.jpeg" className="img-questao img-main" title="Questão 152 - Prova de Matemática; ENEM 2020"></img>
                <p>
                    O processo de aeração adiciona ar no líquido aumentando o seu volume. A relação entre os volumes no tanque inicial e no final é dada por:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    <span style={{fontSize: 20}} ref={var1}></span> e <span style={{fontSize: 20}} ref={var2}></span> são os volume dos tanques 1 e 2, respectivamente.
                </p>
                <p>
                    O volume de ar adicionado depende do volume de líquido inicial, ou seja, o volume adicionado é um percentual do volume de líquido inicial:
                </p>
                <div ref={eq2}></div>
                <p>
                    Onde <span style={{fontSize: 18}} className="p-const"></span> é o percentual de ar adicionado.
                </p>
                <p>
                    Denotamos a área da base dos tanques como <span style={{fontSize: 20}} ref={var3}></span> e <span style={{fontSize: 20}} ref={var4}></span> e a altura dos tanques como <span style={{fontSize: 20}} ref={var5}></span> e <span style={{fontSize: 20}} ref={var6}></span>.
                </p>
                <p>
                    Como a área da base é o comprimento pela largura, então:
                </p>
                <div style={{fontSize: 18}} ref={eq3}></div>
                <div style={{fontSize: 18}} ref={eq4}></div>
                <p>
                    Ou seja, a área da base dos tanques é igual. A relação dos volumes depende somente da altura dos tanques. <br /> A relação entre os volumes fica:
                </p>
                <div style={{fontSize: 20}} ref={eq5}></div>
                <div style={{fontSize: 20}} ref={eq6}></div>
                <p>
                    O percentual de volume adicionado depende do volume de entrada em cada aerador. Podemos calcular a relação entre os volumes dos tanques 1 e 2 aplicando a equação acima duas vezes, considerando em vez das alturas, a relação entre os volumes no tanque 1 e no aerador 1, e então a relação de volumes no aerador 1 <span ref={var8}></span> e no aerador 2 <span ref={var9}></span>:
                </p>
                <div style={{fontSize: 20}} ref={eq7}></div>
                <p>
                    Como <span ref={var10}></span> e <span ref={var11}></span>, então:
                </p>
                <div style={{fontSize: 20}} className="div-eq-1" ref={eq8}></div>
                <div style={{fontSize: 20}} ref={eq9}></div>
                <div style={{fontSize: 20}} ref={eq10}></div>
                <div style={{fontSize: 20}} ref={eq11}></div>
                <p>
                    Como explicado acima, os volumes dos tanques 1 e 2 dependem somente das respectivas alturas <span style={{fontSize: 18}} ref={var12}></span> e <span style={{fontSize: 18}} ref={var13}></span>:
                </p>
                <div id="resp-q152" ref={resp}></div>
                <p>
                    Alternativamente, podemos encontrar a solução sem a necessidade de calcular os volumes intermediários, calculando o percentual total <span style={{fontSize: 18}} className="p-const"></span> e utilizando a equação <span style={{fontSize: 18}} ref={eq12}></span>. A soma das duas porcentagens em relação ao volume de entrada fica:
                </p>
                <div style={{fontSize: 18}} ref={eq13}></div>
                <div style={{fontSize: 18}} ref={eq14}></div>
                <div style={{fontSize: 18}} ref={eq15}></div>
                <p>
                    O percentual total <span style={{fontSize: 18}} className="p-const"></span> é a soma das duas porcentagens e do produto delas.
                </p>
            </section>
        </div>
    )
}

export default Q152_EnemMat2020;