import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q4_fuvest2021 = () => {
    const var1 = useElementDiv("\\frac{1}{4} Q");
    const var2 = useElementDiv("Q");
    const var3 = useElementDiv("A");
    const var4 = useElementDiv("l");
    const var5 = useElementDiv("h");
    const var6 = useElementDiv("C");
    useConstLatex("G", "G-const", 3);
    const var7 = useElementDiv("\\frac{l}{2}");
    const var8 = useElementDiv("B");
    const var9 = useElementDiv("AB");
    const var10 = useElementDiv("T = \\footnotesize{\\textbf{área total em verde}}");
    const eq1 = useElementDiv("G \\left( x_G,y_G \\right)", "true");
    const eq2 = useElementDiv("G \\left( \\frac{x_A + x_B + x_C}{3} , \\frac{x_A + x_B + x_C}{3} \\right)", "true");
    const eq3 = useElementDiv("G \\left( \\frac{0 + 0 + h}{3} , \\frac{0 + l + l/2}{3} \\right)", "true");
    const eq4 = useElementDiv("x_G = \\frac{h}{3} \\quad y_G = \\frac{l}{2}", "true");
    const eq5 = useElementDiv("\\frac{l}{2}\\frac{h}{3} \\cdot 6 \\over 2", "true");
    const eq6 = useElementDiv("\\frac{hl}{2}", "true");
    const eq7 = useElementDiv("T = \\frac{hl}{2}");
    const eq8 = useElementDiv("\\frac{1}{4} Q");
    const resp = useElementDiv("T + \\frac{1}{2}Q");
    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Matemática</h1>
                <h2>Questão 4</h2>
                <img className="img-questao img-main" src="./img/fuvest2021-img/Q4-img/fuvest-mat-2021-Q4.jpeg" title="Questão 4 - Prova de matemática; FUVEST 2021"></img>
                <p>Para calcular a área total do pentágono é necessário somar os segmentos de área formados dentro de cada quadrado e triângulo. <br /> Como os vértices 1 e 4 do pentágono coincidem com o ponto central dos quadrados, cada um dos segmentos de área em azul equivale a <span ref={var1}></span>, onde <span ref={var2}></span> é a área de cada quadrado.
                </p>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/fuvest-mat-2021-Q4-edit.svg" title="Ilustração dos vértices e segmentos de área do pentágono"></img>
                <p>Para calcular as áreas verdes formadas dentro dos triângulos utiliza-se o conceito de baricentro, que corresponde ao ponto de 
                intersecção das medianas &ndash; retas que ligam o vértice ao centro da aresta  oposta &ndash; como mostrado na figura abaixo.
                Esse ponto é o centro de gravidade do objeto.
                </p>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/triangle_3.svg"></img>
                <p>Calcula-se a posição do baricentro a partir de um referencial. Coordenadas são definidas a partir da origem &#40;0, 0&#41; do referencial.
                Vamos definir o ponto <span ref={var3}></span> &ndash; correspondente ao vértice mais abaixo do triângulo &ndash; como a origem, mas esse ponto
                poderia ser em qualquer lugar, o que iria modificar os valores das coordenandas dos outros pontos. Sendo <span style={{fontSize: 20}} ref={var4}></span> o comprimento da aresta do triângulo e <span style={{fontSize: 20}} ref={var5}></span> a altura do triângulo. No triângulo equilátero todas as arestas são idênticas e a distância mínima entre o baricentro e cada um das arestas é igual. Finalmente, o baricentro é calculado utilizando a média aritmética das posições em cada eixo &#40;x e y&#41;:
                </p>
                <div style={{fontSize: 25}} ref={eq1}></div>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/fuvest-mat-2021-triangle-center-2.svg" title="Coordenadas dos vértices e baricentro"></img>
                <p>Como é visto na figura, o vértice <span ref={var6}></span> está alinhado horizontalmente com o ponto central <span className="G-const"></span>,
                portanto o ponto <span className="G-const"></span> se encontra na coordenada vertical <span style={{fontSize: 20}} ref={var7}></span>. Mesmo assim, calculamos as duas coordenadas a partir das equações acima.                                   
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <div style={{fontSize: 20}} ref={eq4}></div>
                
                <p>O triângulo retângulo formado pelo baricentro <span className="G-const"></span>, pelo vértice <span ref={var8}></span> e o ponto médio da aresta <span ref={var9}></span> é mostrado abaixo. A área verde corresponde a duas vezes a área desse triângulo retângulo.
                </p>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/triangle_4.svg" title="triângulo retângulo"></img>
                <p>Então, a <span className="span">área total em verde</span> mostrada no pentágono é:</p>
                <div style={{fontSize: 20}} ref={eq5}></div>
                <div style={{fontSize: 20}} ref={eq6}></div>
                <p>
                    Como a área do triângulo maior é <span style={{fontSize: 20}} ref={eq7}></span>, então <span style={{fontSize: 18}} ref={var10}></span>. A área de cada quadrado azul é <span style={{fontSize: 20}} ref={eq8}></span>. Somando todas essas áreas temos a área do pentágono:
                </p>
                <div id="resposta-q4" ref={resp}></div>
            </section>
        </div>

    )
}

export default Q4_fuvest2021;