import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q45_fuvestFis2021 = () => {

    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Física</h1>
                <h2>Questão 45</h2>
                <img className="img-questao img-main" src="./img/fuvestfis2021-img/fuvest-fis-2021-q45.jpeg" title="Questão 45 - Prova de Física; FUVEST 2021"></img>
                <p>Avaliando cada afirmação:</p>
                <p className="quote-q45">
                    "I. Uma pessoa em um trampolim é lançada para o alto. No ponto mais alto de sua trajetória, sua aceleração será nula, o que dá a sensação de "gravidade zero". &nbsp;
                    <span className="span-false"> &#8592; FALSO</span>
                </p>
                <p>
                    A aceleração gravitacional é constante ao longo da trajetória. A Terra exerce uma força peso proporcional a essa aceleração. O que muda ao longo da trajetória é a velocidade da pessoa, que diminui durante a subida até se tornar nula no ponto mais alto.
                </p>
                <p>
                    A aceleração é medida pela variação da velocidade. Como a velocidade é um vetor, possui magnitude e direção. Portanto, a variação da velocidade &#40;aceleração&#41; implica em uma mudança da magnitude ou da direção do vetor. No ponto mais alto, a aceleração gravitacional muda a direção do movimento.
                </p>
                <p className="quote-q45">
                    "II. A resultante das forças agindo sobre um carro andando em uma estrada em linha reta a uma velocidade constante tem módulo diferente de zero."
                    <span className="span-false"> &#8592; FALSO</span>
                </p>
                <p>
                    Pela segunda lei de Newton, a força resultante &#40;somatório das forças&#41; é igual à massa vezes a aceleração do corpo. Se o corpo possui velocidade constante, ele está em movimento retilíneo uniforme ou está em repouso, em ambos os casos o módulo &#40;magnitude&#41; da força resultante é nulo.
                </p>
                <p className="quote-q45">
                    "III. As forças peso e normal atuando sobre um livro em repouso em cima de uma mesa horizontal formam um par ação-reação."
                    <span className="span-false"> &#8592; FALSO</span>
                </p>
                <p>
                    Quando analisamos o par de forças peso e normal atuando em um objeto sobre um plano horizontal, intuitivamente pode-se pensar que a força normal é simplesmente uma reação da força peso. Entretanto, um objeto em repouso sobre um plano inclinado é sustentado pela força normal mais a força de atrito, o que mostra que a força normal não é originada como reação a força peso. Pela terceira lei de Newton, a força de reação tem magnitude igual e direção oposta à força de ação.
                </p>
                <p>
                    A força peso é, de fato, exercida pela Terra sobre os outros corpos, e a força de reação ao peso é justamente aquela que os corpos exercem sobre a Terra. A força normal é perpendicular a superfície de contato, formando um par ação e reação entre os corpos em contato &#40;cada corpo exerce uma força normal sobre o outro&#41;.
                </p>
            </section>
        </div>
    )
}

export default Q45_fuvestFis2021;