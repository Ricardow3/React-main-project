import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q19_unicamp2022 = () => {
    useConstLatex("A", "A-const", 2);
    const var1 = useElementDiv("Q, R, S\\; \\textrm{e}\\; T");
    const var3 = useElementDiv("Q");
    const var4 = useElementDiv("\\overline{AQ}");
    const var5 = useElementDiv("\\overline{AT}");
    const var6 = useElementDiv("\\overline{AT} + \\overline{DT} = 3");
    const var7 = useElementDiv("\\overline{AT} = 1");
    const var8 = useElementDiv("\\overline{AT} = 2");
    const var9 = useElementDiv("\\overline{AQ} = 1 \\therefore \\overline{AB} = 2");
    const eq1 = useElementDiv("\\begin{cases} \\textrm{P.A:}\\; \\left(\\overline{AQ} + \\overline{QB},\\; \\overline{BR} + \\overline{RC},\\; \\overline{CS} + \\overline{SD}\\right) \\newline \\overline{AT} + \\overline{DT} = 3 \\end{cases}", "true");
    useConstLatex("\\overline{AQ} = \\overline{AT}", "eq-tangent-2", 2);
    const eq3 = useElementDiv("\\overline{AO}^2 - r^2 = \\overline{AQ}^2 \\newline \\overline{AO}^2 - r^2 = \\overline{AT}^2", "true");
    const eq4 = useElementDiv("\\textrm{Soma da P.A:}\\; \\sum_{k=0}^{n} a_k = \\frac{n(a_n + a_0)}{2}", "true");
    const eq5 = useElementDiv("\\textrm{Soma dos segmentos:}\\; (\\overline{AQ} + \\overline{QB}) + (\\overline{BR} + \\overline{RC}) + (\\overline{CS} + \\overline{SD})", "true");
    const eq6 = useElementDiv("\\overline{QB} = \\overline{BR}\\; \\textrm{e}\\; \\overline{RC} = \\overline{CS}");
    const eq7 = useElementDiv("\\textrm{Soma dos segmentos:}\\; (\\overline{AQ} + \\overline{SD}) + 2(\\overline{QB} + \\overline{RC})", "true");
    const eq8 = useElementDiv("(\\overline{AQ} + \\overline{SD}) + 2(\\overline{QB} + \\overline{RC}) = \\frac{3(\\overline{AQ} + \\overline{QB} + \\overline{CS} + \\overline{SD})}{2}", "true");
    const eq9 = useElementDiv("\\overline{AT} + \\overline{DT} = \\overline{AQ} + \\overline{SD} = 3", "true");
    const eq10 = useElementDiv("6 + 4(\\overline{QB} + \\overline{RC}) = 3(3 + \\overline{QB} + \\overline{CS})", "true");
    const eq11 = useElementDiv("6 + \\overline{QB} + \\overline{RC} = 9", "true");
    const eq12 = useElementDiv("\\overline{BR} + \\overline{RC} = 3 \\quad \\therefore \\quad \\overline{BC} = 3", "true");
    const resp = useElementDiv("\\overline{AB}, \\overline{BC}, \\overline{CD} = \\{2, 3, 4\\}");

    return (
        <div>
            <section className="body-texto">
                <h1>Unicamp 2022 - Prova de Matemática</h1>
                <h2>Questão 19</h2>
                <img src="./img/unicamp2022-img/Q19-img/unicamp-mat-2022-q19.jpeg" className="img-questao img-main" title="Questão 19 - Prova de matemática; Unicamp 2021"></img>
                <p>
                    Para resolver essa questão usaremos um pouco de raciocínio intuitivo, considerando que as informações dadas no problema não indicam como chegar diretamente em uma solução formal, ou seja, no final do problema, podemos dar um palpite da solução e testar a validade da mesma.
                </p>
                <p>
                    Todos os lados do quadrilátero medem números inteiros, além disso, o segmento formado pela ponto de tangência do quadrilátero com o círculo e o vértice de um dos lados também é um número inteiro. Essa informação é fundamental para que um palpite da solução seja dado.
                </p>
                <p>
                    Assumimos arbitrariamente que o quadrilátero tem o seguinte formato inicial:
                </p>
                <img src="./img/unicamp2022-img/Q19-img/quadrilatero-1.svg" className="img-questao"></img>
                <p>
                    Os pontos de tangência são representados por <span ref={var1}></span>. Definimos também o segmento de reta que liga os pontos <span className="A-const"></span> e <span ref={var3}></span> como <span style={{fontSize: 18}} ref={var4}></span>, e assim sucessivamente para os outros segmentos.
                </p>
                <p>
                    Consideramos então as duas condições que definem os lados do quadrilátero:
                </p>
                <div style={{fontSize: 20}} className="div-eq-1" ref={eq1}></div>
                <p>
                    A primeira condição é a relação entre os lados que formam uma progressão aritmética.
                </p>
                <p>
                    Usando a equação da <span id="span">potência de um ponto <span>A potência de um ponto é um número constante associado à distância de um ponto até um círculo</span></span>, podemos demostrar que os segmentos de reta adjacentes que tangenciam um círculo são iguais. Ou seja, <span style={{fontSize: 18}} className="eq-tangent-2"></span>, e assim para os outros segmentos adjacentes. A potência do ponto <span className="A-const"></span> em relação ao círculo inscrito é:
                </p>
                <div className="eq-img">
                    <div style={{fontSize: 20}} ref={eq3}></div>
                    <img src="./img/unicamp2022-img/Q19-img/power-of-point.svg"></img>
                </div>
                <p>
                    Portanto, <span style={{fontSize: 18}} className="eq-tangent-2"></span>. <br /> Utilizando as relações entre os segmentos e a expressão que calcula a soma de uma progessão aritmética, encontramos:
                </p>
                <div ref={eq4}></div>
                <div ref={eq5} className="div-eq-1"></div>
                <p>
                    Como <span ref={eq6}></span>, então:
                </p>
                <div ref={eq7} className="div-eq-1"></div>
                <p>
                    Igualando a equação acima com a soma da progessão aritmética:
                </p>
                <div ref={eq8} className="div-eq-1"></div>
                <p>
                    Utilizando a segunda condição dada na questão:
                </p>
                <div style={{fontSize: 18}} ref={eq9}></div>
                <p>
                    Substituimos essa expressão na equação acima &#40;soma dos segmentos&#41;:
                </p>
                <div style={{fontSize: 18}} ref={eq10}></div>
                <div style={{fontSize: 18}} ref={eq11}></div>
                <div style={{fontSize: 20}} ref={eq12}></div>
                <p>
                    Concluimos então que o quadrilátero tem os dois lados opostos não paralelos de mesma medida. Portanto, nesse caso, ele é um trapézio isósceles. Essa conclusão pode ser feita pois a única forma de duas arestas opostas não paralelas terem a mesma medida e, ainda, circunscreverem um círculo, é se o quadrilátero for um trapézio isósceles. Caso as arestas opostas fossem iguais e paralelas, então, para circunscrever o círculo, o quadrilátero seria um quadrado ou um losango. Entretanto, nesses casos, as arestas não formam uma progressão aritmética.
                </p>
                <p>
                    Redesenhando a figura:
                </p>
                <img src="./img/unicamp2022-img/Q19-img/quadrilatero-2.svg" className="img-questao"></img>
                <p>
                    Sabendo a forma certa do quadrilatero, usamos o condição de <span style={{fontSize: 18}} ref={var5}></span> ser um número inteiro. Como <span style={{fontSize: 18}} ref={var6}></span>, então <span style={{fontSize: 18}} ref={var7}></span>, pois caso <span style={{fontSize: 18}} ref={var8}></span> a progressão aritmética não seria satisfeita.
                </p>
                <p>
                    Concluimos, finalmente, que <span style={{fontSize: 18}} ref={var9}></span> e a progressão aritmética fica:
                </p>
                <div id="resp" ref={resp}></div>
            </section>
        </div>
    )
}

export default Q19_unicamp2022;