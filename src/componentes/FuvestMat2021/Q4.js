import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q4_fuvest2021 = () => {
    const eq1 = useElementDiv("G \\left( x_G,y_G \\right)", "true");
    const eq2 = useElementDiv("G \\left( \\frac{x_A + x_B + x_C}{3} , \\frac{x_A + x_B + x_C}{3} \\right)", "true");
    const eq3 = useElementDiv("G \\left( \\frac{0 + 0 + h}{3} , \\frac{0 + l + l/2}{3} \\right)", "true");
    const eq4 = useElementDiv("x_G = \\frac{h}{3} \\quad y_G = \\frac{l}{2}", "true");
    const eq5 = useElementDiv("\\frac{l}{2}\\frac{h}{3} \\cdot 6 \\over 2", "true");
    const eq6 = useElementDiv("\\frac{hl}{2}", "true");
    const eq7 = useElementDiv("T = \\frac{hl}{2}");
    const resp = useElementDiv("T = \\frac{1}{2} Q");
    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Matemática</h1>
                <h2>Questão 4</h2>
                <img className="img-questao img-main" src="./img/fuvest2021-img/Q4-img/fuvest-mat-2021-Q4.png" title="Questão 4 - Prova de matemática; FUVEST 2021"></img>
                <p>Para calcular a área total do pentágono é necessário somar os segmentos de área formados dentro de cada quadrado e triângulo. <br /> Como os vértices 1 e 4 do pentágono coincidem com o ponto central dos quadrados, cada um dos segmentos de área em azul equivale a <math><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>Q</mi></math>, onde <math><mi>Q</mi></math> é a área de cada quadrado.
                </p>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/fuvest-mat-2021-Q4-edit.svg" title="Ilustração dos vértices e segmentos de área do pentágono"></img>
                <p>Para calcular as áreas verdes formadas dentro dos triângulos utiliza-se o conceito de baricentro, que corresponde ao ponto de 
                intersecção das medianas &ndash; retas que ligam o vértice ao centro da aresta  oposta &ndash; como mostrado na figura abaixo.
                Esse ponto é o centro de gravidade do objeto.
                </p>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/triangle_3.svg"></img>
                <p>Calcula-se a posição do baricentro a partir de um referencial. Coordenadas são definidas a partir da origem (<math><mn>0</mn>
                <mo>,</mo><mn>0</mn></math>) do referencial.
                Vamos definir o ponto <math><mi>A</mi></math> &ndash; correspondente ao vértice mais abaixo do triângulo &ndash; como a origem, mas esse ponto
                poderia ser em qualquer lugar, o que iria modificar os valores das coordenandas dos outros pontos. Sendo <math><mi>l</mi></math>
                o comprimento da aresta do triângulo e <math><mi>h</mi></math> a altura do triângulo. No triângulo equilátero todas as arestas 
                são idênticas e a distância mínima entre o baricentro e cada um das arestas é igual. Finalmente, o baricentro é calculado 
                utilizando a média aritmética das posições em cada eixo (x e y):
                </p>
                <div style={{fontSize: 25}} ref={eq1}></div>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/fuvest-mat-2021-triangle-center-2.svg" title="Coordenadas dos vértices e baricentro"></img>
                <p>Como é visto na figura, o vértice <math><mi>C</mi></math> está alinhado horizontalmente com o ponto central <math><mi>G</mi></math>,
                portanto o ponto <math><mi>G</mi></math> se encontra na coordenada vertical <math><mi>l</mi><mo>/</mo><mn>2</mn></math>. 
                Mesmo assim, calculamos as duas coordenadas a partir das equações acima.                                   
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <div style={{fontSize: 20}} ref={eq4}></div>
                
                <p>O triângulo retângulo formado pelo baricentro <math><mi>G</mi><mo></mo></math>, pelo vértice <math><mi>B</mi></math> e o ponto médio da aresta 
                <math><mi>AB</mi></math> é mostrado abaixo. A área verde corresponde a duas vezes a área desse triângulo retângulo.
                </p>
                <img className="img-questao" src="./img/fuvest2021-img/Q4-img/triangle_4.svg" title="triângulo retângulo"></img>
                <p>Então, a <span className="span">área total em verde</span> mostrada no pentágono é:</p>
                <div style={{fontSize: 20}} ref={eq5}></div>
                <div style={{fontSize: 20}} ref={eq6}></div>
                <p>Como a área do triângulo maior é <div style={{display: "inline", fontSize: 20}} ref={eq7}></div>, então <math><mi>T</mi><mo>=</mo></math> <span className="span"> área total em verde</span>.</p>
                <div>
                    <p style={{display: 'inline'}} id="frase-final">A área do pentágono fica</p> &nbsp;
                    <div id="resposta" ref={resp}></div>
                </div>
            </section>
        </div>

    )
}

export default Q4_fuvest2021;