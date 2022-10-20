import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q159_EnemMat2021 = () => {
    const var1 = useElementDiv("\\propto");
    const var2 = useElementDiv("k");
    const var3 = useElementDiv("s");
    const eq1 = useElementDiv("t_{troca} \\propto \\frac{1}{n_{pessoas}}", "true");
    const eq2 = useElementDiv("t_{troca} = k \\frac{1}{n_{pessoas}}", "true");
    const eq3 = useElementDiv("t_{troca} n_{pessoas} = k \\quad \\therefore \\quad k = 4 \\cdot 3 = 12\\; s", "true");
    const eq4 = useElementDiv("t_{troca} = \\frac{12}{2} =");
    const resp = useElementDiv("6\\; s");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2021 - Prova de Matemática</h1>
                <h2>Questão 159</h2>
                <img src="./img/enem2021-img/enem-mat-2021-q159.jpeg" className="img-questao img-main" title="Questão 152 - Prova de Matemática; ENEM 2021"></img>
                <p>
                    A troca de todos os pneus é feita por grupos separados de 3 pessoas, totalizando 4 grupos. O tempo gasto para trocar os pneus depende de todos os grupos terem finalizado a troca, ou seja, é preciso analisar somente o grupo que demorou mais na troca do pneu.
                </p>
                <p>
                    Como dito na questão, o tempo gasto para trocar um pneu é inversamente proporcional ao número de pessoas trabalhando nele. Com base nisso, podemos escrever uma equação que relaciona as duas variáveis:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    O símbolo <span style={{fontSize: 20}} ref={var1}></span> representa a proporcionalidade. Nesse caso, o tempo gasto é proporcional ao inverso do número de pessoas.
                </p>
                <p>
                    Se considerarmos que outras variáveis que possam influenciar no tempo gasto de troca não variam em função do número de pessoas, então essas variáveis,  se existirem, podem ser agrupadas em uma constante, de tal forma que a equação de proporcionalidade acima se torna uma equação de igualdade:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                    Onde <span style={{fontSize: 20}} ref={var2}></span> é uma constante, conhecida como constante de proporcionalidade.
                </p>
                <p>
                    Calculamos essa constante para o caso de 3 pessoas:
                </p>
                <div className="div-eq-1">
                    <div style={{fontSize: 20}} ref={eq3}></div>
                </div>
                <p>
                    Como o número de pessoas é uma variável adimensional, a constante é medida em <span style={{fontSize: 20}} ref={var3}></span> &#40;segundos&#41;.
                </p>
                <p>
                    Resolvendo a equação para o caso de 2 pessoas:
                </p>
                <div id="div-resp-q159">
                    <div ref={eq4}></div>
                    <div id="resp-mat-eq159" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q159_EnemMat2021;