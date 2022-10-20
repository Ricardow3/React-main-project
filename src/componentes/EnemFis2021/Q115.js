import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q115_EnemFis2021 = () => {
    useConstLatex("q", "heat-flow", 3);
    useConstLatex("A", "area", 2);
    useConstLatex("d", "distance", 2);
    const var2 = useElementDiv("k");
    const var3 = useElementDiv("\\frac{1}{2} d");
    const var4 = useElementDiv("T_2");
    const var5 = useElementDiv("T_3");
    const eq1 = useElementDiv("q = k A \\frac{(T_1 - T_2)}{d}", "true");
    const eq2 = useElementDiv("q = A \\frac{(T_1 - T_3)}{\\frac{d_1}{k_1} + \\frac{d_2}{k_2}}", "true");
    const eq3 = useElementDiv("T_1 - T_2 = \\frac{q \\left( \\frac{d}{k} \\right)}{A} \\quad \\quad T_1 - T_3 = \\frac{q \\left( \\frac{d_1}{k_1} + \\frac{d_2}{k_2} \\right)}{A}", "true");
    const eq4 = useElementDiv("T_1 - T_2 \\propto \\frac{d}{k} \\quad \\quad T_1 - T_3 \\propto \\frac{d_1}{k_1} + \\frac{d_2}{k_2} ", "true");
    const eq5 = useElementDiv("\\textrm{alumínio:}\\quad T_1 - T_2 \\propto \\frac{d}{20}", "true");
    const eq6 = useElementDiv("\\textrm{ferro:}\\quad T_1 - T_2 \\propto \\frac{d}{8}", "true");
    const eq7 = useElementDiv("\\textrm{cobre-aço:}\\quad T_1 - T_3 \\propto \\frac{d}{2\\cdot 40} + \\frac{d}{2\\cdot 5} = \\frac{9d}{80}", "true");
    const eq8 = useElementDiv("\\frac{1}{8} = \\frac{10}{80} > \\frac{9}{80}", "true");
    const resp = useElementDiv("T_{\\textit{alumínio}} > T_{\\textit{cobre-aço}} > T_{\\textit{ferro}}");

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2021 - Prova de Física</h1>
                <h2>Questão 115</h2>
                <img src="./img/enemfis2021-img/Q115-img/enem-fis-2021-q115.jpeg" className="img-questao img-main" title="Questão 115 - Prova de Física; ENEM 2021"></img>
                <p>
                    A equação apresentada na questão relaciona a taxa de transferência de calor por condução com a diferença de temperatura entre dois pontos em um meio estacionário, como um sólido. Nesse caso, a condução de calor é unidimensional em <span id="span-mobile">regime estacionário <span>Condição na qual as propriedades do sistema &#40;nesse caso, temperatura&#41; podem variar no espaço, mas não variam no tempo</span></span>. Ou seja, o fluxo de calor é descrito por uma única coordenada e a temperatura em um determinado ponto da panela não varia no tempo.
                </p>
                <p>
                    A taxa de transferência de calor é representada por <span style={{fontSize: 20}} className="heat-flow"></span> na equação abaixo:
                </p>
                <div className="eq_img">
                    <img src="./img/enemfis2021-img/Q115-img/fluxo_termico.svg"></img>
                    <div style={{fontSize: 20}} ref={eq1}></div>
                </div>
                <p>
                    <span style={{fontSize: 20}} ref={var2}></span> é a condutividade térmica do material, <span style={{fontSize: 18}} className="area"></span> é a área da superfície e <span style={{fontSize: 20}} className="distance"></span> é a distância entre os dois pontos. Essa equação também assume que a condutividade térmica não varia com a temperatura.
                </p>
                <p>
                    A transferência de calor ao longo da espessura da panela ocorre de forma unidimensional.
                </p>
                <img src="./img/enemfis2021-img/Q115-img/panela_conducao.svg" className="img-questao"></img>
                <p>
                    Se a espessura da panela for composta de dois materiais, a equação fica:
                </p>
                <div className="eq_img">
                    <img src="./img/enemfis2021-img/Q115-img/fluxo_termico_2.svg"></img>
                    <div style={{fontSize: 20}} ref={eq2}></div>
                </div>
                <p>
                    Note que a diferença de temperatura na equação continua sendo entre os pontos externos.
                </p>
                <p>
                    Podemos comparar qual panela é mais econômica considerando uma taxa de condução de calor <span style={{fontSize: 20}} className="heat-flow"></span> constante &#40;fonte de calor&#41;, área superficial <span style={{fontSize: 18}} className="area"></span> e espessura <span style={{fontSize: 20}} className="distance"></span> iguais para todos os casos. Se a taxa <span style={{fontSize: 20}} className="heat-flow"></span> for a mesma, a condutividade térmica irá alterar a diferença de temperatura entre a superfície externa e interna da panela.
                </p>
                <p>
                    Rearranjando os termos para isolar a diferença de temperatura, chegamos a duas expressões &#40;para parede simples e composta&#41;:
                </p>
                <div style={{fontSize: 20}} className="div-eq-1" ref={eq3}></div>
                <p>Então:</p>
                <div style={{fontSize: 20}} className="div-eq-1" ref={eq4}></div>
                <p>
                    A panela de aço e cobre tem espessura de <span style={{fontSize: 20}} ref={var3}></span> para cada material. Aplicando os valores de condutividade térmica, encontramos:
                </p>
                <div style={{fontSize: 18}} ref={eq5}></div>
                <div style={{fontSize: 18}} ref={eq6}></div>
                <div style={{fontSize: 18}} className="div-eq-1" ref={eq7}></div>
                <p>
                    A menor diferença de temperatura entre a superfície externa e interna, em regime estacionário, é da panela de alumínio. Comparando a panela de ferro com a de cobre-aço:
                </p>
                <div style={{fontSize: 18}} ref={eq8}></div>
                <p>
                    A panela de ferro apresenta maior diferença de temperatura que a de cobre-aço. Como a temperatura da panela na superfície externa &#40;em contato com a chama&#41; é a mesma em todos os casos, uma diferença de temperatura menor significa que a temperatura interna &#40;<span ref={var4}></span> ou <span ref={var5}></span> nas expressões acima&#41; é maior. Isso permite cozinhar os alimentos e ferver a água mais rapidamente. A temperatura da superfície interna fica na ordem:
                </p>
                <div id="resp-fis-q115" ref={resp}></div>
            </section>
        </div>
    )
}

export default Q115_EnemFis2021;