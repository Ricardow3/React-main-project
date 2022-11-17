import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q126_EnemFis2021 = () => {

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2021 - Prova de Física</h1>
                <h2>Questão 126</h2>
                <div className="div-img-large">
                    <img src="./img/enemfis2021-img/Q126-img/enem-fis-2021-q126.jpeg" className="img-questao img-main-large" title="Questão 126 - Prova de Física; ENEM 2021"></img>
                </div>
                <p>
                    O circuito deve ser desenhado de tal forma que cada lâmpada seja acessa uma de cada vez. Para encontrar o circuito que satisfaz essa condição, inicialmente podemos esquematizar as possibilidades de estado que o circuito pode ter através de uma árvore de decisão. Por exemplo:
                </p>
                <img src="./img/enemfis2021-img/Q126-img/arvore-decisao-lampada.svg" className="img-questao img-fit"></img>
                <p>
                    Nesse exemplo, a árvore aplica uma condição inicial ao circuito para ligar a lâmpada verde, mas poderia ser aplicado a qualquer lâmpada. O esquema mostra que só é possível ligar uma lâmpada de cada vez. Quando o caminho "ON" é seguido, o interruptor conecta a fonte de tensão à lâmpada, caso contrário ele é desligado.
                </p>
                <p>
                    Aplicando a lógica da árvore a um circuito elétrico:
                </p>
                <img src="./img/enemfis2021-img/Q126-img/circuito.svg" className="img-questao img-fit"></img>
                <p>
                    O circuito equivalente na questão é mostrado na <span id="resp-q126">alternativa D</span>.
                </p>
            </section>
        </div>
    )
}

export default Q126_EnemFis2021;