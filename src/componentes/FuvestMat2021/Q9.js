import React from "react";
import './style.css';
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q9_fuvest2021 = () => {
    const var1 = useElementDiv("FB");
    const var3 = useElementDiv("FB = 3");
    const var4 = useElementDiv("\\frac{l}{2}");
    useConstLatex("h", "h-const", 2);
    useConstLatex("l", "l-const", 3);
    const eq1 = useElementDiv("\\left( \\frac{l}{2} \\right)^2 + h^2 = l^2 \\quad \\therefore \\quad h^2 = l^2 - \\frac{l^2}{4}", "true");
    const eq2 = useElementDiv("h^2 = \\frac{3l^2}{4} \\quad \\therefore \\quad h = \\frac{\\sqrt{3}l}{2}", "true");
    const eq3 = useElementDiv("h = l \\sin(\\,60°\\,) = 6 \\cdot \\frac{\\sqrt{3}}{2} = 3 \\sqrt{3}", "true");
    const eq4 = useElementDiv("\\sqrt{ 13^2 + (3\\sqrt{3})^2 } = \\sqrt{196} = ");
    const resp = useElementDiv("14");
    return (
        <div>
            <section className="body-texto">
                <h1>Fuvest 2021 - Prova de Matemática</h1>
                <h2>Questão 9</h2>
                <img className="img-questao img-main" src="./img/fuvest2021-img/Q9-img/fuvest-mat-2021-Q9.jpeg" title="Questão 9 - Prova de matemática; FUVEST 2021"></img>
                <p>
                O segmento <span ref={var1}></span> equivale a metade do lado do triângulo, ou seja, <span ref={var3}></span>.
                Vamos demostrar a equação que relaciona a altura <span style={{fontSize: 20}} className="h-const"></span> do triângulo com o seu lado <span style={{fontSize: 20}} className="l-const"></span>.
                </p>
                <div id="triangle-q9">
                <img className="img-questao img2-q9" src="./img/fuvest2021-img/Q9-img/triangle1_eq1.svg" title="Triângulo equilátero"></img>
                <div style={{fontSize: 20}} ref={eq1}></div>
                <div style={{fontSize: 20}} ref={eq2}></div>
                </div>
                <p>
                A altura <span style={{fontSize: 20}} className="h-const"></span> é a projeção de <span style={{fontSize: 20}} className="l-const"></span> em relação à vertical, que pode ser calculada também pelo seno do ângulo formado pelos lados <span style={{fontSize: 20}} className="l-const"></span> e <span style={{fontSize: 20}} ref={var4}></span>.
                No triângulo equilátero esse ângulo vale 60°:
                </p>
                <div style={{fontSize: 20}} ref={eq3}></div>
                <p>Calcula-se então o comprimento do segmento <math><mi>FD</mi></math> a partir da hipotenusa do triângulo <math><mi>FDC</mi></math>: </p>
                <img className="img-questao" src="./img/fuvest2021-img/Q9-img/triangle_2.svg" title="Triângulo retângulo maior"></img>
                <p>O comprimento do segmento fica:</p>
                <div id="eq-resp">
                    <div ref={eq4}></div> 
                    <div id="resposta-q9" ref={resp}></div>
                </div>  
            </section>
        </div>
    )
}

export default Q9_fuvest2021;
