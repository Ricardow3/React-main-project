import { useEffect } from "react";

const katex = require('katex');

const useConstLatex = (constante, classe, numberOf) => {  

    useEffect(() => {
        let divEle = document.getElementsByClassName(classe);
        for (let i=0; i<numberOf; i++) {               
            katex.render(constante, divEle[i], {throwOnError: false});
        }
    }, [])
}

export default useConstLatex;