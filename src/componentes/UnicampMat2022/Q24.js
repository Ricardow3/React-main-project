import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";


const Q24_unicamp2022 = () => { 
    useConstLatex("\\alpha", "div-alpha", 3);
    const eq1 = useElementDiv("400 \\cos (\\alpha) + 30 \\sin (\\alpha)", "true");
    const eq2 = useElementDiv("\\cos (2 \\alpha ) = 2 \\cos^2 ( \\alpha ) - 1");
    const eq3 = useElementDiv("\\cos (135)");
    const eq4 = useElementDiv("\\cos (135) = \\cos (180 - 45) = - \\cos (45) = - \\frac {\\sqrt {2}}{2}", "true");
    const eq5 = useElementDiv("\\sqrt{2 + \\sqrt{2}}");
    const eq6 = useElementDiv("\\frac{ \\sin({2\\alpha}) }{ \\sin({\\alpha}) }");
    const resp = useElementDiv("200 \\sqrt{2 - \\sqrt{2}} + 15 \\sqrt{2 + \\sqrt{2}}");

    return (
        <div>
            <section className="body-texto">
            <h1>Unicamp 2022 - Prova de Matemática</h1>
            <h2>Questão 24</h2>
            <img className="img-questao img-main" src="./img/unicamp2022-img/Q24-img/unicamp-mat-2021-Q24.jpeg" title="Questão 24 - Prova de matemática; Unicamp 2021"></img>
            <p>A largura do canal é obtida pela soma de algumas projeções das medidas dadas na figura. O ângulo formado entre o eixo longitudinal do navio e a reta perpendicular a direção do canal &#40;direção horizontal na imagem&#41; equivale à <span className="div-alpha"></span>.
            </p>
            <img className="img-questao" src="./img/unicamp2022-img/Q24-img/alpha-1.svg" title="Ângulo projetado entre o eixo longitudinal do navio e a horizontal"></img>
            <p>A largura equivale a soma das projeções dadas por <math><mi>A</mi></math> e <math><mi>B</mi></math> na figura abaixo.</p>
            <img className="img-questao" id="projecoes-q24" src="./img/unicamp2022-img/Q24-img/projecoes.svg" title="Projeções das medidas do navio em relação à horizontal"></img>
            <div style={{fontSize: 20}} ref={eq1}></div>
            <p>
                Como o ângulo <span className="div-alpha"></span> não é um dos ângulos notáveis &#40;30°, 45° ou 60°&#41; a estimativa dos seus respectivos senos e cossenos pode ser difícil por aproximação. Para estimar o seno e o cosseno do ângulo <span className="div-alpha"></span> usa-se as relações dadas na questão. A dedução é mostrada abaixo:
            </p>
            <div>
                <img className="img-questao img-eq2" src="./img/unicamp2022-img/Q24-img/eq-2.svg"></img>
                <img className="img-questao img-eq2" src="./img/unicamp2022-img/Q24-img/eq-3.svg"></img>
            </div>
            <p>
                A relação&nbsp; <span ref={eq2}></span> &nbsp;é aplicada no denominador. Substituindo <span className="div-alpha"></span> pelo ângulo dado na questão, chega-se ao valor de&nbsp; <span style={{fontSize: 15}} ref={eq3}></span> &nbsp;que é um ângulo múltiplo de 45°:
            </p>
            <div ref={eq4}></div>
            <p>Aplicando esse valor à equação acima:</p>
            <img className="img-questao" id="eq5-q24" src="./img/unicamp2022-img/Q24-img/eq-5.svg"></img>
            <p>
                Multiplica-se o termo resultante por&nbsp; <span ref={eq5}></span> &nbsp;no numerador e no denominador, como mostrado acima.
            </p>
            <p>Juntando-se os termos do denominador em uma única raiz:</p>
            <div>
                <img className="img-questao img-eq4" src="./img/unicamp2022-img/Q24-img/eq-61.svg"></img>
                <img className="img-questao img-eq4" src="./img/unicamp2022-img/Q24-img/eq-62.svg"></img>
            </div>
            <p>Resolvendo o termo&nbsp; <span style={{fontSize: 20}} ref={eq6}></span> &nbsp;pela relação dada na questão: </p>
            <img className="img-questao" id="eq7-q24" src="./img/unicamp2022-img/Q24-img/eq-7.svg"></img>
            <p>Finalmente, substituindo os termos resultante na primeira expressão &#40;largura do canal&#41;:
            </p>
            <div id="resposta-q24" ref={resp}></div>
            </section>
        </div>
        
    )
}

export default Q24_unicamp2022;