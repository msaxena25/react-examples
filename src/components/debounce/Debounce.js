import React, { useCallback, useState, useEffect } from 'react';
import { debounce } from 'lodash';
import useDebounce from './useDebounce';
let timeoutId;
function myDebounce(func, delay) {
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func(...args)
        }, delay);
    }
}

const handler = (e) => {
    console.log('hello', e)
}
export default function Debounce() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const debounceValue = useDebounce(value3, 2000);

    useEffect(() => {
        handler(debounceValue);
    }, [debounceValue]);

    // used useCallback to store reference of callback
    const delayedHandleChangeWithLodash = useCallback(debounce(eventData => handler(eventData.target.value), 2000), []);

    /**
     * You can use - useCallback here aswell
     * Or we created timeoutId outside of debounce function
     */
    const delayChange = myDebounce(eventData => handler(eventData.target.value), 2000);

    const onChange = (e) => {
        setValue(e.target.value);
        delayChange(e);
    };
    const onChangeByCustomHook = (e) => {
        setValue3(e.target.value);
    };
    const onChangeLodash = (e) => {
        setValue2(e.target.value);
        delayedHandleChangeWithLodash(e);
    };
    return (
        <div>Debounce
            <div>
                <label>Debounce with Custom code: </label><input type="text" onChange={onChange} value={value} ></input>
            </div>

            <div>
                <label>Debounce with Custom hook: </label><input type="text" onChange={onChangeByCustomHook} value={value3} ></input>
            </div>

            <div>
                <label>Debounce with Lodash library: </label>
                <input type="text" onChange={onChangeLodash} value={value2} ></input>
            </div>

        </div>

    )
}

/**
 * This is a caveat of function components. Local variables inside a function expires after every call. Every time the component is re-evaluated, the local variables gets initialized again.

Throttle and debounce works using window.setTimeout() behind the scenes. Every time the function component is evaluated, you are registering a fresh setTimeout callback.

You have to store a reference to the debounced callback somehow.

Two solutions -
1. usecallback
2. create timeoutId variable outside the function.
 */