import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q107_EnemFis2021 = () => {
    const var1 = useElementDiv("P");
    const var2 = useElementDiv("K");
    const var3 = useElementDiv("t");
    const var4 = useElementDiv("m");
    const var5 = useElementDiv("v");
    const var6 = useElementDiv("v_f");
    const eq1 = useElementDiv("P = \\frac{\\Delta K}{t}", "true");
    const eq2 = useElementDiv("K = \\frac{m v^2}{2}", "true");
    const eq3 = useElementDiv("P = \\frac{K_f - K_0}{t} = \\frac{m v_f^2}{2t}", "true");
    const eq4 = useElementDiv("P = \\frac{F d}{t} = F v", "true");
    const eq5 = useElementDiv("F d");

    return (
        <div>
            <section className="body-texto">
                <h1>ENEM 2021 - Prova de Física</h1>
                <h2>Questão 107</h2>
                <img src="./img/enemfis2021-img/Q107-img/enem-fis-2021-q107.jpeg" className="img-questao img-main" title="Questão 107 - Prova de Física; ENEM 2021"></img>
                <p>
                    A questão apresenta dados de aceleração e velocidade máxima do mesmo veículo &#40;mesma massa&#41; funcionando com álcool e com gasolina.
                </p>
                <p>
                    Sabemos que a potência é uma taxa de variação de energia, ou seja, o quanto a energia varia em função do tempo. A energia liberada na queima do combustível é convertida em energia cinética do carro. Logo, a potência mecânica é a variação da energia cinética em um intervalo de tempo:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    Nessa equação, <span style={{fontSize: 18}} ref={var1}></span> é a potência, <span style={{fontSize: 18}} ref={var2}></span> é a energia cinética e <span style={{fontSize: 20}} ref={var3}></span> é o intervalo de tempo.
                </p>
                <p>
                    A energia cinética é a energia associado ao movimento de um corpo:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                    Nessa equação, <span style={{fontSize: 20}} ref={var4}></span> é a massa do corpo e <span style={{fontSize: 20}} ref={var5}></span> é a velocidade.
                </p>
                <p>
                    Como o carro parte do repouso em ambas as situações, a energia cinética inicial é nula. Substituindo uma equação na outra:
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>
                    Na comparação dos combustíveis, a velocidade final <span style={{fontSize: 20}} ref={var6}></span> é a mesma, porém <strong className="strong-rose">o tempo para atingir essa velocidade é menor no caso do álcool, portanto a sua potência é maior</strong>.
                </p>
                <p>É importante observar que a potência mecânica pode ser descrita também como:</p>
                <div style={{fontSize: 20}} ref={eq4}></div>
                <p>
                    Onde <span style={{fontSize: 18}} ref={eq5}></span> é o trabalho realizado por uma força ao longo do deslocamento. Nessa equação, a força e a velocidade são constantes ao longo do deslocamento.
                </p>
                <p>
                    A questão mostra a velocidade máxima atingida nos dois casos. Entretanto, não podemos concluir à respeito da potência quando a velocidade máxima é atingida, pois não sabemos o valor da força que mantém o carro em movimento. A força que mantém o carro em velocidade constante deve se igualar às forças de atrito nos componentes internos do carro mais a resistência ao rolamento nas rodas. Essa força é chamada, popularmente, de tração.
                </p>
            </section>
        </div>
    )
}

export default Q107_EnemFis2021;