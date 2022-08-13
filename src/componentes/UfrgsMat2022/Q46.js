import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q46_ufrgs2022 = () => {
    const eq1 = useElementDiv("\\log\\left(\\frac{a}{b}\\right) = \\log(a) - \\log(b)", "true");
    const eq2 = useElementDiv("\\log\\left(\\frac{1}{2}\\right) + \\log\\left(\\frac{2}{3}\\right) + \\log\\left(\\frac{3}{4}\\right) + ... + \\log\\left(\\frac{99}{1000}\\right) ", "true");
    const eq3 = useElementDiv("\\log(1) - \\cancel{\\log(2)} + \\cancel{\\log(2)} - \\cancel{\\log(3)} + \\cancel{\\log(3)} - \\cancel{\\log(4)} + ... + \\cancel{\\log(999)} - \\log(1000) ", "true");
    const eq4 = useElementDiv("\\log(1) - \\log(1000) = \\log\\left(\\frac{1}{1000}\\right)", "true");
    const eq5 = useElementDiv("\\log\\left(\\frac{1}{1000}\\right) = \\log\\left(1000^{-1}\\right) = - \\log(\\,1000\\,) ", "true");
    const eq6 = useElementDiv("- \\log\\left(10^3\\right) = X \\quad \\therefore \\quad X = -3 \\log(\\,10\\,) ", "true");
    const resp = useElementDiv("X = -3");

    return (
        <section className="body-texto">
            <h1>UFRGS 2022 - Prova de Matemática</h1>
            <h2>Questão 46</h2>
            <img className="img-questao img-main" src="./img/ufrgs2022-img/ufrgs-mat-2022-Q46.png" title="Questão 46 - Prova de matemática; UFRGS 2022"></img>
            <p>Para resolver esse somatório, basta aplicar uma propriedade conhecida do logaritmo:</p>
            <div style={{fontSize: 20}} ref={eq1}></div>
            <p>Primeiro, é feita a simplificação da fração dentro de cada logaritmo. Como o denominador das frações cresce em progressão aritmética, os termos ficam:</p>
            <div style={{fontSize: 18}} ref={eq2}></div>
            <p>Aplicando a propriedade acima:</p>
            <div ref={eq3}></div>
            <p>Os termos intermediários se cancelam, sobrando somente o primeiro e o último. Aplicando novamente a mesma propriedade:</p>
            <div style={{fontSize: 18}} ref={eq4}></div>
            <p>Como o logaritmo é de base 10, a solução pode ser encontrado pela simplificação:</p>
            <div ref={eq5}></div>
            <div style={{fontSize: 18}} ref={eq6}></div>
            <div id="resposta-q46" ref={resp}></div>
        </section>
    )
}

export default Q46_ufrgs2022;