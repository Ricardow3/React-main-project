import { useRef, useEffect } from "react";

const katex = require('katex')

const useElementDiv = (equation, condition) => {
    const elementRef = useRef();
    useEffect(() => {
        const divElement = elementRef.current;
        katex.render(equation, divElement, {
            throwOnError: false,
            displayMode: condition
        });
        }, [])
    
    return elementRef;
}

export default useElementDiv;