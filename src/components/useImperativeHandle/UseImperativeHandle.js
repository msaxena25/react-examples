import React, { forwardRef, useImperativeHandle } from 'react'

// https://blog.logrocket.com/underrated-react-hooks-youre-missing-out-on/

export default function UseImperativeHandleComponent() {

    const childRef = React.useRef(); // created a ref using useRef hook to pass in child component

    const onFocus = () => {
        childRef.current.focus();
        console.log('childRef :', childRef);
        /**
         * childRef :
            {current: {…}}
             current: {focus: ƒ}
         */

    }
    const onOpenModel = () => {
        childRef.current.openModel();
    }
    return (
        <div>UseImperativeHandle
            <div>
                <button onClick={onFocus}>Click me to Focus on Input Field</button>
                <button onClick={onOpenModel}>Click me to open Model</button>
            </div>

            <div style={{ marginTop: 10, border: 'solid gray 1px' }}>
                <p>This is ChildInputComponent</p>
                <ChildInputComponent ref={childRef}></ChildInputComponent>
            </div>


        </div>
    )
}

function ChildInputComponent(props, ref) { // this ref passed from Parent
    const inputRef = React.useRef(); // child internal ref
    const [openModel, setOpenModel] = React.useState(false);

    useImperativeHandle(ref, () => (
        {
            focus: () => {
                inputRef.current.focus();
            },
            openModel: () => {
                onOpenModel();
            }
        }
    ))
    const onOpenModel = () => {
        setOpenModel(!openModel)
    }
    return (
        <div>
            <label>Enter your Name: </label><input ref={inputRef} />
            <div>
                <button onClick={onOpenModel}>{openModel ? 'Close' : 'Open'} Model</button>
                {
                    openModel &&
                    <p style={{ border: 'solid 5px red', width: 100, height: 80, marginTop: 5, fontWeight: 'bold' }}>
                        This is a modal!</p>
                }
            </div>
        </div>
    );
}
ChildInputComponent = forwardRef(ChildInputComponent);

/**
 In React, data is passed from parent to child components via props, known as unidirectional data flow.
 The parent component cannot directly call a function defined in the child component or reach down to grab a value for itself.

 If we want our parent component to reach down to the child component and access Child component functions,
 We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref

 useImperativeHandle(ref, createHandle, [dependencies])
ref: the ref passed down from the parent component
createHandle: the value to be exposed to the parent component
dependencies: an array of values that causes the Hook to rerun when changed
 */