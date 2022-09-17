import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q47_fuvestFis2021 = () => {
    useConstLatex("P", "peso-pendulum", 1);
    useConstLatex("F_t", "tan-force", 1);
    useConstLatex("F_r", "rad-force", 1);
    useConstLatex("a", "accel-tan", 2);
    useConstLatex("a_h", "accel-pendulum", 1);
    useConstLatex("x", "desl-pendulum", 1);
    useConstLatex("\\omega", "vel-pendulum", 1);
    const var1 = useElementDiv("L");
    const var2 = useElementDiv("\\theta");
    const eq1 = useElementDiv("P = m g");
    const eq2 = useElementDiv("m a = - m g \\sin(\\theta) ", "true");
    const eq3 = useElementDiv("a = \\alpha L", "true");
    const eq4 = useElementDiv("\\alpha = \\frac{-g \\sin(\\theta)}{L}", "true");
    const eq5 = useElementDiv("\\sin(\\theta) \\approx \\theta", "true");
    const eq6 = useElementDiv("\\alpha \\approx \\frac{-g \\theta}{L}", "true");
    const eq7 = useElementDiv("a_h = - \\omega^2 x", "true");
    const eq8 = useElementDiv("\\omega^2 = \\frac{g}{L} \\quad \\therefore \\quad \\omega = \\sqrt{\\frac{g}{L}}", "true");
    const eq9 = useElementDiv("\\omega = \\frac{2 \\pi}{T} = \\sqrt{\\frac{g}{L}}", "true");
    const eq10 = useElementDiv("\\frac{L}{g} = \\left( \\frac{T}{2 \\pi} \\right)^2 = \\left( \\frac{1,5}{2\\cdot3} \\right)^2 ", "true");
    const eq11 = useElementDiv("L = \\frac{10}{16} = 0,625 \\; m = ", "true");
    const resp = useElementDiv("62,5 \\; cm");

    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Física</h1>
                <h2>Questão 47</h2>
                <img className="img-questao img-main" src="./img/fuvestfis2021-img/Q47-img/fuvest-fis-2021-q47.jpeg" title="Questão 47 - Prova de Física; FUVEST 2021"></img>
                <p>
                O acelerômetro acoplado no smartphone é capaz de medir a aceleração do aparelho nas três dimensões, isso possibilita, por exemplo, a rotação de imagens quando o dispositivo é colocado na horizontal. Quando o smartphone é pendurado por um fio, que está preso a um suporte, e é aplicado uma força horizontal sobre o mesmo, o dispositivo passa a oscilar de tal forma que o acelerômetro pode medir uma das componentes da aceleração do dispositivo, produzindo o gráfico da figura. De acordo com a questão, podemos considerar o movimento do smartphone equivalente a de um pêndulo simples.
                </p>
                <img className="img-questao" src="./img/fuvestfis2021-img/Q47-img/pendulo-simples.svg"></img>
                <p>
                    Na figura acima, é mostrado o movimento de um pêndulo simples. O peso <span className="peso-pendulum" style={{fontSize: 20}}></span> do corpo pode ser decomposto nas forças <span className="tan-force" style={{fontSize: 20}}></span> e <span className="rad-force" style={{fontSize: 20}}></span>, que são chamadas de força tangencial e força radial, respectivamente. Durante o movimento, somente a força tangencial altera o magnitude da velocidade, pois ela atua na mesma direção do movimento. Aplicando a segunda lei de Newton no corpo, e considerando <span style={{fontSize: 18}} ref={eq1}></span>:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>Onde <span className="accel-tan" style={{fontSize: 20}}></span> é a aceleração tangencial.</p>
                <p>
                    Como o fio não varia o seu comprimento, a trajetória do movimento percorre o arco de um círculo. É possível obter o comprimento do fio <span style={{fontSize: 18}} ref={var1}></span> relacionando a aceleração tangencial com a aceleração angular do movimento.
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>Substituindo <span className="accel-tan" style={{fontSize: 20}}></span> na segunda lei de Newton e isolando a aceleração angular, temos:</p>
                <div style={{fontSize: 20}} ref={eq4}></div>
                <p>
                    É possível demonstrar, com deduções mais complexas, que a equação acima <strong>não</strong> é equivalente a de um <div id="span">movimento harmônico simples <span>Um exemplo de MHS é o movimento resultante de um sistema massa-mola, quando deslocado do seu ponto de equilíbrio</span></div>. Entretanto, o movimento do pêndulo se assemelha muito com um oscilador harmônico para ângulos pequenos.
                </p>
                <p id="parag-theta-q47">Para <span style={{fontSize: 18}} ref={var2}></span> pequeno &#40;entre 0 e 15°&#41;:</p>
                <div style={{fontSize: 20}} ref={eq5}></div>
                <div style={{fontSize: 20}} ref={eq6}></div>
                <p>É possível demonstrar, também, que um oscilador harmônico tem uma aceleração proporcional ao seu deslocamento do ponto de equilíbrio:</p>
                <div style={{fontSize: 20}} ref={eq7}></div>
                <p>
                    Na equação acima, <span className="accel-pendulum" style={{fontSize: 20}}></span> é a aceleração do oscilador, <span className="desl-pendulum" style={{fontSize: 20}}></span> é o deslocamento do ponto de equilíbrio, e <span className="vel-pendulum" style={{fontSize: 20}}></span> é a velocidade angular &#40;ou frequência angular&#41;. Comparando a equação do oscilador harmônico com a equação do pêndulo simples &#40;para ângulos pequenos&#41;:
                </p>
                <div style={{fontSize: 20}} ref={eq8}></div>
                <p>
                    Portanto, a frequência angular do movimento do pêndulo depende somente do comprimento do fio, e não da massa ou do ângulo de oscilação. A frequência angular é o inverso do período do pêndulo.
                </p>
                <div style={{fontSize: 20}} ref={eq9}></div>
                <p>
                    Obtemos, finalmente, o período de oscilação do smartphone a partir do gráfico da questão. Ligando dois picos ou dois vales, observamos que o período equivale à, aproximadamente, <span style={{fontSize: 18}}>1,5</span> segundos. Aplicando esse valor na equação acima, obtemos o comprimento do fio:
                </p>
                <div style={{fontSize: 20}} ref={eq10}></div>
                <div id="resp-fis-q47">
                    <div ref={eq11}></div>
                    <div id="resposta" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q47_fuvestFis2021;