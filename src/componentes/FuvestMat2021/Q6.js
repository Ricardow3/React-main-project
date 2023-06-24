import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q6_fuvest2021 = () => {
    useConstLatex("x", "var-x", 2);
    useConstLatex("y", "var-y", 3);
    const var3 = useElementDiv("P");
    const var4 = useElementDiv("32");
    const eq1 = useElementDiv("P = 5x - 2y", "true");
    const eq2 = useElementDiv("50 = x + y", "true");
    const eq3 = useElementDiv("P = 124");
    const eq4 = useElementDiv("\\begin{cases} 124 = 5x - 2y \\newline 50 = x + y \\end{cases} ", "true");
    const eq5 = useElementDiv("124 = 5x - 2(50 - x) \\newline 224 = 7x \\newline x = 32", "true");
    const eq6 = useElementDiv("y = 18");
    const eq7 = useElementDiv("32 - 18 = ");
    const resp = useElementDiv("14");

    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Matemática</h1>
                <h2>Questão 6</h2>
                <img className="img-questao img-main" src="./img/fuvest2021-img/Q6-img/fuvest-mat-2021-q6.jpeg" title="Questão 6 - Prova de Matemática; FUVEST 2021"></img>
                <p>
                    O sistema de pontuação é calculado pela equação abaixo, onde <span className="var-x" style={{fontSize: 20}}></span> é o número de arremessos acertados e <span className="var-y" style={{fontSize: 20}}></span> é o número de aremessos errados:
                </p>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <p><span style={{fontSize: 18}} ref={var3}></span> é a pontuação total. O número de aremesso é:</p>
                <div style={{fontSize: 20}} ref={eq2}></div>
                <p>Como <span style={{fontSize: 18}} ref={eq3}></span>, o sistema de equações fica:</p>
                <div style={{fontSize: 20}} ref={eq4}></div>
                <p>Isolando <span className="var-y" style={{fontSize: 20}}></span> na segunda equação e substituindo na primeira:</p>
                <div style={{fontSize: 20}} ref={eq5}></div>
                <p>O número de aremessos acertados é <span style={{fontSize: 18}} ref={var4}></span>.</p>
                <p>Substituindo <span className="var-x" style={{fontSize: 20}}></span> para encontrar <span className="var-y" style={{fontSize: 20}}></span> em qualquer equação, chega-se a <span style={{fontSize: 18}} ref={eq6}></span>.</p>
                <p>A diferença de aremessos acertados e errados é:</p>
                <div id="equations-q6">
                    <div ref={eq7}></div>
                    <div id="resposta-q6" style={{fontSize: 20}} ref={resp}></div>
                </div>
            </section>
        </div>
    )
}

export default Q6_fuvest2021;