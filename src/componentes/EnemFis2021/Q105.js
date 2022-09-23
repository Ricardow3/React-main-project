import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q105_EnemFis2021 = () => {
    const var1 = useElementDiv("\\vec{v}");
    const var2 = useElementDiv("\\vec{B}");
    const var3 = useElementDiv("q");
    const var4 = useElementDiv("\\theta");
    const eq1 = useElementDiv("\\vec{F} = q \\, ( \\vec{v} \\times \\vec{B} )", "true");
    const eq2 = useElementDiv("F = q v B \\sin{\\theta}", "true");

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2021 - Prova de Física</h1>
                <h2>Questão 105</h2>
                <img src="./img/enemfis2021-img/Q105-img/enem-fis-2021-q105.jpeg" className="img-questao img-main" title="Questão 105 - Prova de Física; ENEM 2021"></img>
                <p>
                    As cargas estão imersas em um campo magnético uniforme, onde as linhas de campo magnético são ortogonais as linhas de campo gravitacional. A figura abaixo ilustra uma projeção tridimensional do campo magnético e do haltere de cargas.
                </p>
                <img src="./img/enemfis2021-img/Q105-img/campo_magnetico_1.svg" className="img-questao"></img>
                <p>
                    A força magnética que atua sobre as cargas é uma componente da chamada força de Lorentz &#40;ou força eletromagnética&#41;. A força de Lorentz é uma combinação das forças elétricas e magnéticas que são proporcionais a magnitude dos respectivos campos. Para uma partícula carregada, a força magnética é descrita como:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    Na equação acima, <span style={{fontSize: 20}} ref={var1}></span> é a velocidade da carga, <span style={{fontSize: 18}} ref={var2}></span> é o campo magnético. Note que são duas grandezas vetoriais, portanto possuem direção e magnitude. Carga elétrica é uma grandeza escalar, representada por <span style={{fontSize: 20}} ref={var3}></span>.
                </p>
                <p>
                    A força magnética é proporcional à magnitude da velocidade da carga e do campo magnético, mas a direção da força é perpendicular aos dois vetores. Esse efeito é representado matematicamente pelo chamado produto vetorial &#40;o &#215; na equação&#41;. O resultado do produto vetorial é um vetor, diferentemente do produto escalar. Esse vetor aponta na direção da força magnética.
                </p>
                <p>
                    Resolvendo a equação da força magnética, chegamos em:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                    Nessa equação, resolvemos o produto vetorial, substituindo os vetores pelas magnitudes da velocidade e do campo magnético. <span style={{fontSize: 20}} ref={var4}></span> é o ângulo entre os dois vetores.
                </p>
                <p>
                    Pela equação, se o ângulo entre a velocidade e o campo magnético for 90°, então o seno é 1, configurando a máxima força aplicada sobre aquela carga. Como explicado acima, o vetor força é perpendicular à velocidade e ao campo.
                </p>
                <p>
                    Para encontrar o sentido correto da força, é conveniente que se utilize a chamada <span className="italic">regra da mão direita</span>. Nessa convenção, a mão direita é aberta com o dedo polegar perpendicular aos outros. O dedo polegar representa a velocidade da carga, os outros dedos representam o campo magnético e a palma da mão representa a força magnética.
                </p>
                <img src="./img/enemfis2021-img/Q105-img/mao-direita.svg" className="img-questao"></img>
                <p>
                    Se a carga elétrica for positiva, a força aponta no sentido da palma, caso seja negativa, ela aponta no sentido contrário.
                </p>
                <p>
                    Como o campo gravitacional aponta na direção perpendicular ao campo magnético, a velocidade inicial das cargas apontam para dentro da página, e a <strong className="strong-rose">força magnática sobre as cargas, positiva e negativa, apontam respectivamente para baixo e para cima</strong>, quando o diagrama é visto de cima.
                </p>
                <p>A figura abaixo ilustra o sentido das forças em projeção isométrica &#40;tridimensional&#41;.</p>
                <img src="./img/enemfis2021-img/Q105-img/forca-magnetica-1.svg" className="img-questao"></img>
            </section>
        </div>
    )
}

export default Q105_EnemFis2021;