import React, { useCallback, useState, useEffect } from 'react';
import { throttle } from 'lodash';
import useThrottle from './useThrottle';

function myThrottle(callback, delay) {
    let timerExist = false;
    return function (...args) {
        if (timerExist) return;
        setTimeout(() => {
            callback(...args)
            timerExist = false;
        }, delay);
        timerExist = true;
    }
}
const handler = (e) => {
    console.log('hello throttle', e)
}
export default function Throttle() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const throttleValue = useThrottle(value3, 2000);

    useEffect(() => {
        handler(throttleValue);
    }, [throttleValue]);

    const delayThrottle = useCallback(myThrottle((e) => handler(e.target.value), 2000), []);

    const delayThrottleWithLodash = useCallback(throttle((e) => handler(e.target.value), 2000), []);



    const onChange = (e) => {
        setValue(e.target.value);
        delayThrottle(e);
    };
    const onChangeByCustomHook = (e) => {
        setValue3(e.target.value);
    };
    const onChangeLodash = (e) => {
        setValue2(e.target.value);
        delayThrottleWithLodash(e);
    };
    return (
        <div>Throttle
            <div>
                <label>Throttle with Custom code: </label><input type="text" onChange={onChange} value={value} ></input>
            </div>

            <div>
                <label>Throttle with Custom hook: </label><input type="text" onChange={onChangeByCustomHook} value={value3} ></input>
            </div>

            <div>
                <label>Throttle with Lodash library: </label>
                <input type="text" onChange={onChangeLodash} value={value2} ></input>
            </div>

        </div>
    )
}
