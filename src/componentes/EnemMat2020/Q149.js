import React from "react";
import "./style.css";
import useElementDiv from "../equations";

const Q149_EnemMat2020 = () => {
    const var1 = useElementDiv("Y");
    const var2 = useElementDiv("X");
    const eq1 = useElementDiv("Y = \\log(f) = \\log\\left( \\frac{A}{r^B} \\right)", "true");
    const eq2 = useElementDiv("\\log\\left( \\frac{A}{r^B} \\right) = \\log(A) - \\log(r^B)", "true");
    const eq3 = useElementDiv("\\log(r^B) = B \\log(r)", "true");
    const eq4 = useElementDiv("Y = \\log(f)");
    const eq5 = useElementDiv("X = \\log(r)");
    const eq6 = useElementDiv("Y = \\log(A) - B \\log(r) =");
    const resp = useElementDiv("\\log(A) - B \\cdot X");

    return (
        <div>
            <section className="body-texto">
                <h1>Enem 2020 - Prova de Matemática</h1>
                <h2>Questão 149</h2>
                <img src="./img/enem2020-img/enem-mat-2020-q149.jpeg" className="img-questao img-main" title="Questão 146 - Prova de Matemática; ENEM 2020"></img>
                <p>
                    Para resolver essa questão basta aplicar as propriedades do logaritmo. A relação entre <span ref={var1}></span> e <span ref={var2}></span> é obtida diretamente aplicando-se o logaritmo nos dois lados da equação que descreve a Lei de Zipf:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p>
                    Uma propriedade que pode ser demonstrada é que o logaritmo de um quociente é igual ao logaritmo do numerador menos o logaritmo do denominador:
                </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>
                    A outra propriedade é a da potência. O logaritmo de uma exponenciação é igual ao produto do expoente pelo logaritmo da base:
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>
                    Como <span ref={eq4}></span> e <span ref={eq5}></span>, então:
                </p>
                <div id="div-resp-q149">
                    <div ref={eq6}></div>
                    <div id="resp-q149" ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q149_EnemMat2020;