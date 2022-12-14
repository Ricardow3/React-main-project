import React from "react";
import "./style.css";
import useElementDiv from "../equations";
import useConstLatex from "../constLatex";

const Q19_unicamp2022 = () => {
    useConstLatex("A", "A-const", 2);
    const var1 = useElementDiv("Q, R, S\\; \\textrm{e}\\; T");
    const var3 = useElementDiv("Q");
    const var4 = useElementDiv("\\overline{AQ}");
    const var5 = useElementDiv("\\overline{AT}");
    const var6 = useElementDiv("\\overline{AT} + \\overline{DT} = 3");
    const var7 = useElementDiv("\\overline{AT} = 1");
    const var8 = useElementDiv("\\overline{AT} = 2");
    const var9 = useElementDiv("\\overline{AQ} = 1 \\therefore \\overline{AB} = 2");
    const eq1 = useElementDiv("\\begin{cases} \\textrm{P.A:}\\; \\left(\\overline{AQ} + \\overline{QB},\\; \\overline{BR} + \\overline{RC},\\; \\overline{CS} + \\overline{SD}\\right) \\newline \\overline{AT} + \\overline{DT} = 3 \\end{cases}", "true");
    useConstLatex("\\overline{AQ} = \\overline{AT}", "eq-tangent-2", 2);
    const eq3 = useElementDiv("\\overline{AO}^2 - r^2 = \\overline{AQ}^2 \\newline \\overline{AO}^2 - r^2 = \\overline{AT}^2", "true");
    const eq4 = useElementDiv("\\textrm{Soma da P.A:}\\; \\sum_{k=0}^{n} a_k = \\frac{n(a_n + a_0)}{2}", "true");
    const eq5 = useElementDiv("\\textrm{Soma dos segmentos:}\\; (\\overline{AQ} + \\overline{QB}) + (\\overline{BR} + \\overline{RC}) + (\\overline{CS} + \\overline{SD})", "true");
    const eq6 = useElementDiv("\\overline{QB} = \\overline{BR}\\; \\textrm{e}\\; \\overline{RC} = \\overline{CS}");
    const eq7 = useElementDiv("\\textrm{Soma dos segmentos:}\\; (\\overline{AQ} + \\overline{SD}) + 2(\\overline{QB} + \\overline{RC})", "true");
    const eq8 = useElementDiv("(\\overline{AQ} + \\overline{SD}) + 2(\\overline{QB} + \\overline{RC}) = \\frac{3(\\overline{AQ} + \\overline{QB} + \\overline{CS} + \\overline{SD})}{2}", "true");
    const eq9 = useElementDiv("\\overline{AT} + \\overline{DT} = \\overline{AQ} + \\overline{SD} = 3", "true");
    const eq10 = useElementDiv("6 + 4(\\overline{QB} + \\overline{RC}) = 3(3 + \\overline{QB} + \\overline{CS})", "true");
    const eq11 = useElementDiv("6 + \\overline{QB} + \\overline{RC} = 9", "true");
    const eq12 = useElementDiv("\\overline{BR} + \\overline{RC} = 3 \\quad \\therefore \\quad \\overline{BC} = 3", "true");
    const resp = useElementDiv("\\overline{AB}, \\overline{BC}, \\overline{CD} = \\{2, 3, 4\\}");

    return (
        <div>
            <section className="body-texto">
                <h1>Unicamp 2022 - Prova de Matem??tica</h1>
                <h2>Quest??o 19</h2>
                <img src="./img/unicamp2022-img/Q19-img/unicamp-mat-2022-q19.jpeg" className="img-questao img-main" title="Quest??o 19 - Prova de matem??tica; Unicamp 2021"></img>
                <p>
                    Para resolver essa quest??o usaremos um pouco de racioc??nio intuitivo, considerando que as informa????es dadas no problema n??o indicam como chegar diretamente em uma solu????o formal, ou seja, no final do problema, podemos dar um palpite da solu????o e testar a validade da mesma.
                </p>
                <p>
                    Todos os lados do quadril??tero medem n??meros inteiros, al??m disso, o segmento formado pela ponto de tang??ncia do quadril??tero com o c??rculo e o v??rtice de um dos lados tamb??m ?? um n??mero inteiro. Essa informa????o ?? fundamental para que um palpite da solu????o seja dado.
                </p>
                <p>
                    Assumimos arbitrariamente que o quadril??tero tem o seguinte formato inicial:
                </p>
                <img src="./img/unicamp2022-img/Q19-img/quadrilatero-1.svg" className="img-questao"></img>
                <p>
                    Os pontos de tang??ncia s??o representados por <span ref={var1}></span>. Definimos tamb??m o segmento de reta que liga os pontos <span className="A-const"></span> e <span ref={var3}></span> como <span style={{fontSize: 18}} ref={var4}></span>, e assim sucessivamente para os outros segmentos.
                </p>
                <p>
                    Consideramos ent??o as duas condi????es que definem os lados do quadril??tero:
                </p>
                <div style={{fontSize: 20}} className="div-eq-1" ref={eq1}></div>
                <p>
                    A primeira condi????o ?? a rela????o entre os lados que formam uma progress??o aritm??tica.
                </p>
                <p>
                    Usando a equa????o da <span id="span">pot??ncia de um ponto <span>A pot??ncia de um ponto ?? um n??mero constante associado ?? dist??ncia de um ponto at?? um c??rculo</span></span>, podemos demostrar que os segmentos de reta adjacentes que tangenciam um c??rculo s??o iguais. Ou seja, <span style={{fontSize: 18}} className="eq-tangent-2"></span>, e assim para os outros segmentos adjacentes. A pot??ncia do ponto <span className="A-const"></span> em rela????o ao c??rculo inscrito ??:
                </p>
                <div className="eq-img">
                    <div style={{fontSize: 20}} ref={eq3}></div>
                    <img src="./img/unicamp2022-img/Q19-img/power-of-point.svg"></img>
                </div>
                <p>
                    Portanto, <span style={{fontSize: 18}} className="eq-tangent-2"></span>. <br /> Utilizando as rela????es entre os segmentos e a express??o que calcula a soma de uma progess??o aritm??tica, encontramos:
                </p>
                <div ref={eq4}></div>
                <div ref={eq5} className="div-eq-1"></div>
                <p>
                    Como <span ref={eq6}></span>, ent??o:
                </p>
                <div ref={eq7} className="div-eq-1"></div>
                <p>
                    Igualando a equa????o acima com a soma da progess??o aritm??tica:
                </p>
                <div ref={eq8} className="div-eq-1"></div>
                <p>
                    Utilizando a segunda condi????o dada na quest??o:
                </p>
                <div style={{fontSize: 18}} ref={eq9}></div>
                <p>
                    Substituimos essa express??o na equa????o acima &#40;soma dos segmentos&#41;:
                </p>
                <div style={{fontSize: 18}} ref={eq10}></div>
                <div style={{fontSize: 18}} ref={eq11}></div>
                <div style={{fontSize: 20}} ref={eq12}></div>
                <p>
                    Concluimos ent??o que o quadril??tero tem os dois lados opostos n??o paralelos de mesma medida. Portanto, nesse caso, ele ?? um trap??zio is??sceles. Essa conclus??o pode ser feita pois a ??nica forma de duas arestas opostas n??o paralelas terem a mesma medida e, ainda, circunscreverem um c??rculo, ?? se o quadril??tero for um trap??zio is??sceles. Caso as arestas opostas fossem iguais e paralelas, ent??o, para circunscrever o c??rculo, o quadril??tero seria um quadrado ou um losango. Entretanto, nesses casos, as arestas n??o formam uma progress??o aritm??tica.
                </p>
                <p>
                    Redesenhando a figura:
                </p>
                <img src="./img/unicamp2022-img/Q19-img/quadrilatero-2.svg" className="img-questao"></img>
                <p>
                    Sabendo a forma certa do quadrilatero, usamos o condi????o de <span style={{fontSize: 18}} ref={var5}></span> ser um n??mero inteiro. Como <span style={{fontSize: 18}} ref={var6}></span>, ent??o <span style={{fontSize: 18}} ref={var7}></span>, pois caso <span style={{fontSize: 18}} ref={var8}></span> a progress??o aritm??tica n??o seria satisfeita.
                </p>
                <p>
                    Concluimos, finalmente, que <span style={{fontSize: 18}} ref={var9}></span> e a progress??o aritm??tica fica:
                </p>
                <div id="resp" ref={resp}></div>
            </section>
        </div>
    )
}

export default Q19_unicamp2022;