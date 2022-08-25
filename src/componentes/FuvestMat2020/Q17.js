import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q17_fuvest2020 = () => {
    const var1 = useElementDiv("D_p");
    const eq1 = useElementDiv("D_p = \\sqrt{4^2 + 4^2 + 7^2}", "true");
    const resp = useElementDiv("D_p = 9\\, cm");

    return (
        <section className="body-texto">
            <h1>Fuvest 2020 - Prova de Matemática</h1>
            <h2>Questão 17</h2>
            <img className="img-questao img-main" src="./img/fuvest2020-img/q17-img/fuvest-mat-2020-q17.jpeg" title="Questão 17 -Prova de Matemática; Fuvest 2020"></img>
            <p>
                Esse problema exige uma boa noção espacial, pois é necessário imaginar como um paralelepípedo se encaixa dentro de uma esfera, sendo delimitado pela mesma. O paralelepípedo possui todas as faces retangulares, ou seja, todas as arestas adjacentes formam ângulos de 90° entre si.
            </p>
            <p>
                Para visualizar melhor como um paralelepípedo é inscrito em uma esfera, a imagem abaixo ilustra duas faces de cores distintas do paralelepípedo, e como ele seria visto dentro da esfera por duas vistas diferentes.
            </p>
            <img className="img-questao" src="./img/fuvest2020-img/q17-img/parallel_sphere.svg" title="Paralelepídedo inscrito em uma esfera"></img>
            <p>
                Note que os vértices do paralelepípedo não encostam na superfície projetada da esfera em nenhuma das duas vistas, entretanto, os vértices de fato se encontram com a superfície da esfera, embora isso não possa ser visto nessas projeções. 
            </p>
            <p>
                Sabendo que todos os vértices do paralelepípedo se encontram com a superfície da esfera, o diâmetro da esfera é simplesmente o comprimento que liga dois vértices opostos &#40;diagonal principal do paralelepípedo&#41;.
            </p>
            <img className="img-questao" src="/img/fuvest2020-img/q17-img/parallel_diameter.svg" title="Diagonal principal do paralelepípedo"></img>
            <p>A diagonal principal do paralelepípedo, <span style={{fontSize: 20}} ref={var1}></span>, é calculado como</p>
            <div style={{fontSize: 20}} ref={eq1}></div>
            <div id="resposta-q17" ref={resp}></div>
        </section>
    )
}

export default Q17_fuvest2020;