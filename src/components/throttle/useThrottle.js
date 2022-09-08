import { useState, useEffect } from 'react';

/**
 * Steps to create Hook
 * 1. Construct a custom hook object with two arguments - input value and delay time.
 * 2. As we know, hook executes for each value change which we pass. > useThrottle(value, 2000);
 * 3. When user press a key, hook receives a value and then we have to create a timeout with given delay.
 * 4. In React, useEffect is used to perform initial actions. So inside the useEffect hook, create a timeout.
 * 5. We now need to determine whether the previously formed timer still exists or not when hook receives a value again.
 * 6. To check timer is available, let's create a useState variable named timerExists.
 * 7. A timer or setTimeout will be created if timerExists is initially false.
 * 8. Call the setTimerExists method to update its value to true after setTimeout has been created.
 * 9. And when timeout actually executes, we call setTimerExists with value false inside this.
 * 10 So, when a new value is received, settimeout is now created once more and this process continuous.
 */

const useThrottle = (value, delay) => {
    const [throttleValue, setThrottleValue] = useState('');
    const [timerExists, setTimerExists] = useState(false);
    useEffect(() => {
        if(timerExists) return;
        setTimeout(() => {
            setThrottleValue(value);
            setTimerExists(false);
        }, delay);
        setTimerExists(true);
    }, [value, delay]);

    return throttleValue;

}

export default useThrottle;