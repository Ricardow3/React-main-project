import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q170_EnemMat2021 = () => {
    useConstLatex("\\Delta h", "delta-h", 3);
    const var1 = useElementDiv("i");
    const var2 = useElementDiv("k");
    const var3 = useElementDiv("H");
    const eq1 = useElementDiv("V_a = \\sum_{i=0}^{k} \\pi \\left(r - r_i \\right)^2 \\Delta h", "true");
    const eq2 = useElementDiv("V_a");
    const eq3 = useElementDiv("r_i");
    const eq4 = useElementDiv("V_a = \\pi \\Delta h \\sum_{i=1}^{k} \\left(r - \\frac{i \\Delta h}{\\tan{\\theta}} \\right)^2", "true");
    const eq5 = useElementDiv(" = \\pi \\Delta h \\sum_{i=1}^{k} \\left(r^2 - \\frac{2ri\\Delta h}{\\tan{\\theta}} + \\frac{i^2\\Delta h^2}{\\tan^2{\\theta}} \\right)", "true");
    const eq6 = useElementDiv("r_1 = \\frac{\\Delta h}{tan{\\theta}}");
    const eq7 = useElementDiv("r_i = \\frac{i \\Delta h}{\\tan{\\theta}}");
    const eq8 = useElementDiv("V_a = \\pi \\Delta h \\sum_{i=1}^{k} r^2 - \\frac{2\\pi r \\Delta h^2}{\\tan{\\theta}} \\sum_{i=1}^{k} i + \\frac{\\pi \\Delta h^3}{\\tan^2{\\theta}} \\sum_{i=1}^{k} i^2", "true");
    const eq9 = useElementDiv("r - \\frac{k \\Delta h}{\\tan{\\theta}} = 0 \\quad \\therefore \\quad k = \\frac{r \\tan{\\theta}}{\\Delta h}", "true");
    const eq10 = useElementDiv("100 \\Delta h = r");
    const eq11 = useElementDiv("k = 100 \\tan{\\theta}", "true");
    const eq12 = useElementDiv("V_a = \\pi \\Delta h 100 \\tan{\\theta} r^2 - \\frac{2 \\pi r \\Delta h^2}{\\cancel{\\tan{\\theta}}} \\left(\\frac{100 \\cancel{\\tan{\\theta}}}{2} \\left(100 \\tan{\\theta}+1 \\right) \\right) + \\newline \\frac{\\pi \\Delta h^3}{\\cancel{\\tan^2{\\theta}}} \\left(\\frac{100 \\cancel{\\tan{\\theta}}}{6} \\left(100\\tan{\\theta}+1 \\right)\\left(200\\tan{\\theta}+1 \\right) \\right)", "true");
    const eq13 = useElementDiv("\\tan{\\theta} = \\Large{\\frac{h}{r}}");
    const eq14 = useElementDiv("V_a = \\pi \\left(\\frac{h r^2}{3} + \\frac{r^3}{600} + \\frac{r^3}{300} - \\frac{r^3}{100} + \\cancel{\\frac{r^4}{60000 h}} \\right)", "true");
    const eq15 = useElementDiv("V_a = \\pi \\left(\\frac{h r^2}{3} - \\frac{r^3}{200}\\right)", "true");
    const eq16 = useElementDiv("V = \\frac{\\pi r^2 h}{3}", "true");
    const eq17 = useElementDiv("\\frac{r^3}{200}");
    const eq18 = useElementDiv("h+12 \\longrightarrow 10 \\newline h \\longrightarrow 8", "true");
    const eq19 = useElementDiv("8 (h+12) = 10 h \\quad \\therefore \\quad h = 48\\; cm", "true");
    const eq20 = useElementDiv("H = h + 12\\; cm = 60\\; cm", "true");
    const eq21 = useElementDiv("\\frac{\\pi 5^2\\cdot 60}{3} - \\frac{\\pi 4^2\\cdot 48}{3} = (500 - 256)\\pi =", "true");
    const eq22 = useElementDiv("244 \\cdot 3 = 732\\; cm^3", "true");
    const eq23 = useElementDiv("10\\; cm^3 = 1\\; L \\quad 1\\; cm^3 = 1\\; mL" , "true");
    const resp = useElementDiv("= 732\\; mL");
    

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2021 - Prova de Matemática</h1>
                <h2>Questão 170</h2>
                <img src="./img/enem2021-img/Q170-img/enem-mat-2021-q170.jpeg" className="img-questao img-main" title="Questão 170 - Prova de Matemática; ENEM 2021"></img>
                <p>
                    Vamos inicialmente adquirir um senso intuitivo da fórmula que calcula o volume do cone, ou de um segmento do cone &#40;tronco de cone&#41;, já que o volume da caneca é representada por essa forma geométrica. A dedução da fórmula de volume do cone exige um conceito matemático mais avançado, entretanto, podemos chegar em uma fórmula que se aproxima muito do resultado exato. Caso queira ignorar qualquer demostração, basta utilizar a fórmula do volume do cone e <a className="scroll-page" href="#solucao">pular para a solução</a>.
                </p>
                <p>
                    Imagine que um cone possa ser formado pela sobreposição de vários cilindros, cada um com uma altura <span style={{fontSize: 18}} className="delta-h"></span> e raio variável, alinhados verticalmente pelos seus centros.
                </p>
                <img src="./img/enem2021-img/Q170-img/cone_3d_segments.svg" className="img-questao"></img>
                <p>
                    Se visto frontalmente, esse esquema que esboça uma aproximação do cone real se parece com um triângulo. Todos os cilindros tem a mesma altura <span style={{fontSize: 18}} className="delta-h"></span>.
                </p>
                <img src="./img/enem2021-img/Q170-img/cone_2d_segments.svg" className="img-questao"></img>
                <p>
                    É esperado que o volume total dos cilindros se aproxime do volume do cone. Quanto maior o número de cilindros, melhor a aproximação. Esse volume pode ser obtido pelo somatório dos volumes de cada cilindro:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <img src="./img/enem2021-img/Q170-img/cone_2d_corte.svg" className="img-questao"></img>
                <p>
                    Onde <span style={{fontSize: 20}} ref={eq2}></span> é o volume aproximado do cone, <span style={{fontSize: 20}} ref={eq3}></span> é a diferença entre o raio do cone na base e o raio de cada cilindro, essa diferença aumenta a cada cilindro acima do anterior. Resolvendo a expressão acima, encontramos:
                </p>
                <div style={{fontSize: 20}} ref={eq4}></div>
                <div style={{fontSize: 20}} ref={eq5}></div>
                <p>
                    Para o primeiro cilindro, <span style={{fontSize: 20}} ref={eq6}></span>. Para cada cilindro acima, a diferença aumenta <span ref={var1}></span> vezes, de forma que a expressão fica <span style={{fontSize: 20}} ref={eq7}></span>.
                </p>
                <p>
                    Separando a expressão em três somatórios, podemos resolver usando progressão aritmética:
                </p>
                <div style={{fontSize: 20}} ref={eq8}></div>
                <p>
                    Para encontrar o limite do somatório <span style={{fontSize: 20}} ref={var2}></span>, considera-se que no topo do cone o raio é nulo:
                </p>
                <div ref={eq9}></div>
                <p>
                    Se considerarmos <span ref={eq10}></span> &#40;quanto menor <span  className="delta-h"></span>, mais precisa é a aproximação&#41;, então:
                </p>
                <div ref={eq11}></div>
                <p>
                    Resolvendo as progressão aritméticas com potência:
                </p>
                <div ref={eq12}></div>
                <p>
                    Como <span style={{fontSize: 18}} ref={eq13}></span>, segue-se a dedução substituindo esse termo na expressão acima &#40;caso queira, pode fazer o resto da dedução como exercício&#41;. A solução fica:
                </p>
                <div ref={eq14}></div>
                <div style={{fontSize: 18}} ref={eq15}></div>
                <p>
                    O último termo é considerado aproximadamente zero.
                </p>
                <p>
                    De fato, a equação exata do volume do cone é:
                </p>
                <div style={{fontSize: 20}} ref={eq16}></div>
                <p>
                    O volume obtido por essa aproximação é reduzido do volume real pelo termo <span style={{fontSize: 20}} ref={eq17}></span>. Essa redução é esperada visto que os cilindros não cobrem toda a região interna do cone.
                </p>
                <p id="solucao">
                    O volume da caneca é um segmento de cone, chamado tronco de cone, que pode ser obtido simplesmente pela subtração dos volumes de dois cones:
                </p>
                <img src="./img/enem2021-img/Q170-img/cone_3d_tronco.svg" className="img-questao"></img>
                <p>
                    A altura <span ref={var3}></span> do cone projetado pelo tronco é obtida por semelhança de triângulos:
                </p>
                <img src="./img/enem2021-img/Q170-img/cone_2d_tronco.svg" className="img-questao"></img>
                <div style={{fontSize: 20}} ref={eq18}></div>
                <div style={{fontSize: 20}} ref={eq19}></div>
                <div style={{fontSize: 20}} ref={eq20}></div>
                <p>
                    Calculando o volume dos dois cones e subtraindo um do outro, chegamos em:
                </p>
                <div style={{fontSize: 20}} ref={eq21}></div>
                <div style={{fontSize: 20}} ref={eq22}></div>
                <p>
                    Fazendo a conversão para mililitro:
                </p>
                <div ref={eq23}></div>
                <div id="resp-mat-q170" ref={resp}></div>
                
            </section>
        </div>
    )
}

export default Q170_EnemMat2021;