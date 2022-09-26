import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q145_EnemMat2021 = () => {
    const var1 = useElementDiv("N_i");
    const var2 = useElementDiv("N_{\\textrm{total}} = 5000");
    const var3 = useElementDiv("x");
    const var4 = useElementDiv("y");
    const var5 = useElementDiv("N_{\\textrm{adultos}}");
    const eq1 = useElementDiv("6 = \\frac{ 3 N_{\\textrm{jovens}} + 5 N_{\\textrm{adultos}} + 12 N_{\\textrm{idosos}} }{N_{\\textrm{total}}} ", "true");
    const eq2 = useElementDiv("x = \\frac{N_{\\textrm{jovens}}}{5000} = \\frac{N_{\\textrm{idosos}}}{5000}", "true");
    const eq3 = useElementDiv("y = \\frac{N_{\\textrm{adultos}}}{5000}", "true");
    const eq4 = useElementDiv("N_{\\textrm{jovens}} = N_{\\textrm{idosos}}");
    const eq5 = useElementDiv("\\begin{cases} 30000 = 15 N_{\\textrm{jovens}} + 5 N_{\\textrm{adultos}} \\newline 5000 = 2 N_{\\textrm{jovens}} + N_{\\textrm{adultos}} \\end{cases}", "true");
    const eq6 = useElementDiv("30000 = 15 N_{\\textrm{jovens}} + 5 (5000 - 2 N_{\\textrm{jovens}}) \\newline N_{\\textrm{jovens}} = 1000 ", "true");
    const eq7 = useElementDiv("N_{\\textrm{adultos}} = 3000", "true");
    const resp1 = useElementDiv("x = \\frac{1000}{5000} = 0,2 = 20 \\%");
    const resp2 = useElementDiv("y = \\frac{3000}{5000} = 0,6 = 60 \\%");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2021 - Prova de Matemática</h1>
                <h2>Questão 145</h2>
                <img src="./img/enem2021-img/enem-mat-2021-q145.jpeg" className="img-questao img-main" title="Questão 145 - Prova de Matemática; ENEM 2021"></img>
                <p>
                Na amostra estatística do estudo, o tempo médio de leitura das pessoas analisadas é uma média ponderada das médias de tempo obtidas em cada faixa de idade. A média é ponderada em relação ao número de pessoas analisadas em cada faixa de idade, pois o número de pessoas não é igual para todas as faixas.
                </p>
                <p>
                    Calculamos a média ponderada multiplicando as médias de tempo em cada faixa de idade pelo número de pessoas naquela faixa, somando todos os termos e dividindo pelo número total de pessoas da amostra:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    Na equação acima, <span style={{fontSize: 20}} ref={var1}></span> é o número de pessoas analisadas em cada subconjunto. <span style={{fontSize: 18}} ref={var2}></span>.
                </p>
                <p>
                    O percentual de entrevistados na faixa etária de jovens e idosos é a mesma, representada por <span style={{fontSize: 20}} ref={var3}></span>. O percentual de adultos é representado por <span style={{fontSize: 20}} ref={var4}></span>.
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>
                    Escrevemos um sistema de equações com a primeira equação da média ponderada mais a equação que relaciona o total de entrevistados com o número de pessoas em cada faixa etária. Como <span style={{fontSize: 18}} ref={eq4}></span>, temos:
                </p>
                <div style={{fontSize: 20}} ref={eq5}></div>
                <p>
                    Isolando <span style={{fontSize: 20}} ref={var5}></span> na segunda equação e substituindo na primeira:
                </p>
                <div style={{fontSize: 20}} ref={eq6}></div>
                <p>
                    Substituindo esse valor em qualquer equação, encontramos que:
                </p>
                <div style={{fontSize: 20}} ref={eq7}></div>
                <p>
                    Portanto, o percentual de entrevistado por faixa etária é:
                </p>
                <div className="resp-enem-q145" ref={resp1}></div>
                <div className="resp-enem-q145" ref={resp2}></div>
            </section>
        </div>
    )
}

export default Q145_EnemMat2021;