import React, { useState, useMemo } from 'react'

// Best practice is to move heavy calculations outside the component...
// We can also put inside component as well but that is not recommended.
const calculation = (value) => {
    console.log('calculation function called ', value);
    // perform expensive task here
    return value;
}

export default function CheckReRendering() {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);

    React.useEffect(() => {
        // if (counter % 5 === 0) {
        //     setValue(counter) // immediate update value on change of counter..
        // }
    }, [counter]);

    // It will call at initial time.
    // Next It will run only if the value (dependency) are updated.
    const memoizedValue = useMemo(() => calculation(value), [value]);

    const onChange = () => {
        setCounter(counter => counter + 1);
        // setCounter(counter + 1); - Here both are same

        // note: Below counter value will not receive updated value of counter from above setState because that is async.
        // So when Counter is 6, value is 5.
        //  To update immediately write below in useEffect..
        if (counter % 5 === 0) {
            setValue(counter) // updating value on some condition here...
        }

    }
    return (
        <React.StrictMode>
            <div>
                <h5>Rerendering, React.memo and useMemo</h5>
                <div>
                    <p>Counter Value - {counter}</p>
                    <Child></Child>
                    <button onClick={onChange}>Change Counter</button>
                </div>
                <div style={{ border: 'solid 1px gray', display: 'inline-block', padding: 10 }}>
                    <p>Below memoizedValue will update only when counter is divisble by 5</p>
                    <p>Example of useMemo - Memoized value =  {memoizedValue}</p>
                </div>
            </div>
        </React.StrictMode>
    )
}

// Remove React.memo and then see unnecessary re-rendering of child component
// when change Counter value of Parent.
let Child = function (props) {
    React.useEffect(() => {
        console.log('I am in Child and running unnecessary');
    })
    return (
        <div>
            <p>(Remove react memo first)I am in Child and running unnecessary Check console.log</p>
        </div>
    )
}
Child = React.memo(Child);

// https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately