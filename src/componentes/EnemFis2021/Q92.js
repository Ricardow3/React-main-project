import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q92_EnemFis2021 = () => {
    const var1 = useElementDiv("v");
    const var2 = useElementDiv("\\lambda");
    const var3 = useElementDiv("L");
    const eq1 = useElementDiv("v = \\lambda f", "true");
    const eq2 = useElementDiv("f = \\frac{v}{L}", "true");
    const resp = useElementDiv("f_1 > f_2 \\quad e \\quad v_1 = v_2");

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2021 - Prova de Física</h1>
                <h2>Questão 92</h2>
                <img className="img-questao img-main" src="./img/enemfis2021-img/Q92-img/enem-fis-2021-q92.jpeg" title="Questão 92 - Prova de Física; ENEM 2021"></img>
                <p>
                    O sino dos ventos mostrado na questão é um objeto semelhante ao instrumento musical denominado <span className="italic">Sinos tubulares</span> ou <span className="italic">Carrilhão sinfônico</span>.</p>
                <p>
                    O som emitido por qualquer instrumento é uma onda mecânica que se propaga pelo ar com a mesma frequência de vibração do instrumento, isso porque a frequência de uma onda não se altera quando ela passa de um meio de propagação para outro &#40;do instrumento para o ar&#41;. Já a velocidade de propagação de uma onda depende somente do meio de propagação, e não de seu comprimento de onda ou frequência, ocorre que <strong className="strong-rose">ondas sonoras de frequências distintas se propagam com a mesma velocidade no ar</strong>, mas com velocidade maior em meios mais densos &#40;como a água&#41;.
                    Portanto, o som emitido por qualquer barra tem a mesma velocidade de propagação. 
                </p>
                <p>
                    Para entender a frequência dos sons emitidos pelas barras, é necessário que se compreenda o conceito de modos de vibração. Os modos de vibração são as maneiras nas quais um sistema físico &#8212; como um corpo qualquer ou, no caso da questão, uma barra oca alongada &#8212; podem vibrar mantendo a mesma frequência de vibração entre todas as partículas que o compõem. Isso significa que um dos modos de vibração da barra ocorre quando todas as partículas da barra vibram em uma mesma frequência, chamada de frequência natural.
                </p>
                <p>A frequência fundamental, mencionada na questão, é a frequência natural mais baixa na qual o corpo pode vibrar, conhecida também como primeiro harmônico.</p>
                <p>
                    É possível demostrar que as frequências naturais de oscilação da barra são formadas por ondas estacionárias. Essas ondas têm como característica a formação de nós. Os nós são pontos no espaço onde a amplitude é mínima ou nula. Essas ondas são observadas, por exemplo, em cordas cujas extremidades são fixas.
                </p>
                <img src="./img/enemfis2021-img/Q92-img/standing_wave.svg" className="img-questao"></img>
                <p>
                    Na figura acima, a corda oscila em uma de suas frequências naturais. Essa frequência é encontrada pela relação entre a velocidade de propagação <span style={{fontSize: 20}} ref={var1}></span> e o comprimento de onda <span style={{fontSize: 20}} ref={var2}></span>:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>Se o comprimento do fio for <span style={{fontSize: 18}} ref={var3}></span>, para esse modo de vibração a frequência fica:</p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                    O que ocorre de fato nas barras não é exatamente o mesmo fenômeno da corda, isso porque a corda propaga uma onda transversal. Entretanto, no caso da barra do sino, a onda que se propaga é do tipo longitudinal. Na verdade, as ondas sonoras que se propagam pelo ar são sempre longitudinais. Estas são ondas cuja vibração ocorre no mesmo sentido da propagação da onda.
                </p>
                <p>A figura abaixo ilustra como é o comportamento de uma onda longitudinal se propagando ao longo da região oca da barra &#40;região que contém ar&#41;.</p>
                <img className="img-questao" src="./img/enemfis2021-img/Q92-img/pipe-air-pressure.svg"></img>
                <p>
                    As zonas de máxima compressão e expansão do ar se alternam ao longo do tempo &#40;enquanto uma está em compressão, a outra está em expansão&#41; e correspondem a zonas de alta e baixa pressão. A onda senoidal mostrada na figura representa a pressão do ar, ou seja, os nós &#40;nesse caso denominados nós de pressão&#41; representam zonas onde a pressão varia muito pouco. Próximo dos nós de pressão o ar é livre para se deslocar. Já que a barra do sino não possui extremidades fechadas ao ambiente externo, ambas extremidades são consideradas nós de pressão.
                </p>
                <p>
                    Fazendo a analogia com a onda estacionária na corda, podemos perceber que, nesse modo normal de vibração &#40;ou em qualquer outro&#41;, o comprimento de onda é proporcional ao comprimento da barra. Aplicando isso na equação da onda mostrada acima, encontramos que a frequência natural de uma barra mais comprida &#40;constituída de um mesmo material e de mesma espessura&#41; deve ser menor.
                </p>
                <div id="resp-fis-q92" ref={resp}></div>         
            </section>
        </div>
    )
}

export default Q92_EnemFis2021;