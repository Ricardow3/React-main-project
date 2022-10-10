import React from "react";
import "./style.css";
import useElementDiv from "../equations";


const Q20_unicamp2022 = () => {
    const var1 = useElementDiv("(2,1)");
    const var2 = useElementDiv("(1,2)");
    const var3 = useElementDiv("x");
    const eq1 = useElementDiv("B = \\begin{bmatrix} 1 & k \\newline 3 & k^2 \\end{bmatrix} + \\begin{bmatrix} 1 & 3 \\newline k & k^2 \\end{bmatrix} = \\begin{bmatrix} 2 & 3+k \\newline 3+k & 2k^2 \\end{bmatrix}", "true");
    const eq2 = useElementDiv("\\begin{bmatrix} 2 & 3+k \\newline 3+k & 2k^2 \\end{bmatrix} \\begin{bmatrix} x \\newline y \\end{bmatrix} = \\begin{bmatrix} 2021 \\newline 2022 \\end{bmatrix}", "true");
    const eq3 = useElementDiv("\\begin{bmatrix} 2x + (3+k)y \\newline (3+k)x + 2k^2y \\end{bmatrix}", "true");
    const eq4 = useElementDiv("\\begin{cases} 2x + (3+k)y = 2021 \\newline (3+k)x + 2k^2y = 2022 \\end{cases} ", "true");
    const eq5 = useElementDiv("(x,y,k)");
    const eq6 = useElementDiv("k = 0");
    const eq7 = useElementDiv("\\begin{cases} 2x + 3y = 2021 \\newline 3x = 2022 \\end{cases}", "true");
    const eq8 = useElementDiv("\\{ x = 674 \\quad y \\approx 224,3 \\}");
    const eq9 = useElementDiv("k = -1");
    const eq10 = useElementDiv("\\begin{cases} 2x + 2y = 2021 \\newline 2x + 2y = 2022 \\end{cases}", "true");
    const eq11 = useElementDiv("1 = 0,99");
    const eq12 = useElementDiv("k = 3");
    const eq13 = useElementDiv("\\begin{cases} 2x + 6y = 2021 \\newline 6x + 18y = 2022 \\end{cases}", "true");
    const eq14 = useElementDiv("\\frac{1}{3} = \\frac{2021}{2022}");

    return (
        <div>
            <section className="body-texto">
            <h1>Unicamp 2022 - Prova de Matemática</h1>
            <h2>Questão 20</h2>
            <img className="img-questao img-main" src="./img/unicamp2022-img/Q20-img/unicamp-2022-mat-Q20.jpeg" title="Questão 24 - Prova de matemática; Unicamp 2021"></img>
            <p>A transposta de uma matriz é encontrada substituindo as suas respectivas linhas pelas suas colunas. A diagonal principal se mantém e os outros termos são espelhados em relação à essa diagonal.</p>
            <img className="img-questao" src="./img/unicamp2022-img/Q20-img/matriz-1.svg" title="Termos substituidos em uma matriz transposta"></img>
            <p>
                Na matriz acima, o número 48 se encontra na 2º linha e 1º coluna, ou seja, na posição <span ref={var1}></span>. Para encontra a matriz transposta, basta substituir a posição da linha pela da coluna. O número 48 então é colocada na posição <span ref={var2}></span>.
                Aplicando essa lógica para encontrar a matriz transposta de <math style={{fontSize: 18}}><mi>A</mi></math> e resolvendo a equação para encontrar a matriz <math style={{fontSize: 18}}><mi>B</mi></math>:
            </p>
            <div style={{fontSize: 20}} ref={eq1}></div>
            <p>
                Aplicando a matriz <math style={{fontSize: 18}}><mi>B</mi></math> no sistema da questão:
            </p>
                <div style={{fontSize: 20}} ref={eq2}></div>
            <p>
                O produto de duas matrizes depende da ordem em que elas estão e é calculado a partir das linhas da primeira matriz em conjunto com as colunas da segunda. No sistema acima, a matriz <math style={{fontSize: 18}}><mi>B</mi></math> multiplica um vetor &#40;matriz de coluna única&#41;. Os termos em cada linha da matriz <math style={{fontSize: 18}}><mi>B</mi></math> multiplicam os termos em cada coluna do vetor, que só possui uma. Os termos resultantes da multiplicação são somados em cada linha. O resultado é mostrado abaixo:
            </p>
            <div style={{fontSize: 22}} ref={eq3}></div>
            <p>Portanto, o sistema de equações fica:</p>
            <div  style={{fontSize: 20}} ref={eq4}></div>
            <p id="parag">
                Esse sistema possui três variáveis <span ref={eq5}></span> e somente duas <div id="span">equações linearmente independentes <span>equações que não podem ser escritas como uma combinação linear uma da outra</span> </div>, portanto possui infinitas soluções. Analisando as alternativas:
            </p>
            <p>
                Para&nbsp; <span ref={eq6}></span> &nbsp;as equações ficam:
                <div style={{fontSize: 20}} ref={eq7}></div> 
                Essas equações são linearmente independentes. Isolando <span style={{fontSize: 20}} ref={var3}></span> na segunda equação e substituindo na primeira, é possível encontrar a única solução: <span ref={eq8}></span>
            </p>
            <p>Para&nbsp; <span ref={eq9}></span>,</p>
            <div style={{fontSize: 20}} ref={eq10}></div>
            <p>
                Divindo uma equação pela outra, chega-se à igualdade&nbsp; <span ref={eq11}></span>. Conclui-se que o sistema não possui solução. <strong id="resposta">Essa é a alternativa correta.</strong>
            </p>
            <p>
                Resolvendo ainda para&nbsp; <span ref={eq12}></span>, a fim de verificar todas as alternativas,
            </p>
            <div style={{fontSize: 20}} ref={eq13}></div>
                {/* \[ \normalsize{ 2x + 6y = 2021 } \] */}
                {/* \[ \normalsize{ 6x + 18y = 2022 } \] */}
            <p>Dividindo uma equação pela outra, chega-se à&nbsp; <span style={{fontSize: 18}} ref={eq14}></span>. O sistema não possui solução.</p>
                {/* \( \large{ \frac{1}{3} = \frac{2021}{2022} } \).  */}

            </section>
        </div>
    )
}

export default Q20_unicamp2022;