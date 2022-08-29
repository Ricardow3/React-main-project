import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q46_fuvestFis2021 = () => {
    const var1 = useElementDiv("F_a");
    useConstLatex("F", "vector-f", 3);
    useConstLatex("P", "vector-p", 2);
    const var2 = useElementDiv("N");
    const var3 = useElementDiv("F_v");
    const eq1 = useElementDiv("T_r = 0 \\quad \\therefore \\quad F_v L - P d = 0", "true");
    const eq2 = useElementDiv("F_v = F \\cos(\\theta)", "true");
    const eq3 = useElementDiv("F \\cos(\\theta) L - P d = 0", "true");
    const resp = useElementDiv("F = \\frac{P d}{L \\cos(\\theta)}");
    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Física</h1>
                <h2>Questão 46</h2>
                <img className="img-questao img-main" src="./img/fuvestfis2021-img/Q46-img/fuvest-fis-2021-q46.jpeg" title="Questão 46 - Prova de Física; FUVEST 2021" ></img>
                <p>
                    Nesse experimento, nada intuitivo, a estrutura inteira permanece estática graças a força de atrito entre o palito 1 &#40;da figura&#41; e a mesa de apoio. Como a <div id="span-q46">garrafa não pode sustentar o próprio peso <span>Um corpo não pode exercer força sobre ele mesmo</span></div> somente pelo apoio dos palitos, quem justamente segura toda a estrutura é a mesa.
                </p>
                <img className="img-questao" src="./img/fuvestfis2021-img/Q46-img/estrutura-q46.svg"></img>
                <p>
                    Na figura acima, as variáveis tem a mesma definição dada na questão. Além dessas, a força de atrito <span style={{fontSize: 18}} ref={var1}></span> &#8210; que a mesa exerce sobre o palito &#8210; é mostrada.
                </p>
                <p>
                    Para que a estrutura permaneça parada, a força resultante sobre a corda e cada um dos palitos deve ser nula. Além disso, como se tratam de <div id="span">corpos extensos <span>Corpo cujas dimensões não podem ser desprezadas, não podendo ser reduzido a um ponto</span></div>, o torque resultante também deve ser nulo.
                </p>
                <p>
                    Para resolver a questão, não é necessário considerar todas as componentes das forças, somente aquelas que geram um torque resultante. Calculamos então o torque resultante sobre o palito 1, já que as forças <span className="vector-f" style={{fontSize: 18}}></span> e <span className="vector-p" style={{fontSize: 18}}></span> agem sobre esse palito. A componente vertical da força <span className="vector-f" style={{fontSize: 18}}></span> é a responsável por gerar um torque no sentido contrário aquele gerado pela força <span className="vector-p" style={{fontSize: 18}}></span>, impedindo o palito de rotacionar. O diagrama de corpo livre do palito é mostrado abaixo.
                </p>
                <img className="img-questao" src="./img/fuvestfis2021-img/Q46-img/palito_q46.svg"></img>
                <p>
                    Uma consideração dada na questão é de que o palito se mantém estático mas na iminência de rotacionar, ou seja, nessa condição ele é sustentado por uma força exercida pela ponta da mesa, como mostrado na figura, e a força normal da superfície de contato &#8210; que gera a força de atrito &#8210; é, somente nessa condição, considerada nula.
                </p>
                <p>
                    Calculando então o torque em relação ao ponto <math style={{fontSize: 18}}><mi>A</mi></math>, podemos desprezar todas as forças alinhadas a esse ponto, pois o torque nesse caso é nulo. A força de atrito e a componente horizontal da força <span className="vector-f" style={{fontSize: 18}}></span>, bem como a força <span style={{fontSize: 18}} ref={var2}></span>, são desprezadas. O torque resultante fica:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>Substituindo <span style={{fontSize: 20}} ref={var3}></span> na equação do torque:</p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <div id="resposta-fis-q46" ref={resp}></div>
            </section>
        </div>
    )
}

export default Q46_fuvestFis2021;