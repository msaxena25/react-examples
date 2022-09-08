import { useState, useEffect } from 'react';

const useDebounce = (inputValue, delay) => {
console.log('inputValue :', inputValue);
    const [debounceValue, setDebounceValue] = useState('');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(inputValue);
        }, delay);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [inputValue, delay]);
    return debounceValue;

}

export default useDebounce;