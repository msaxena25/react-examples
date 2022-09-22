import React, { useReducer } from 'react'

// https://codesandbox.io/s/hooks-usereducer-example-forked-lyrti6

const initialState = {
    value: 0
};

export const TYPES = {
    ADD_ONE: "ADD",
    SUBTRACT_ONE: "SUBTRACT",
    MULTIPLY_BY_TWO: "MULTIPLY_BY_TWO",
    RESET: "RESET"
};

const reducerFun = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_ONE:
            return { value: state.value + 1 };
        case TYPES.SUBTRACT_ONE:
            return { value: state.value - 1 };
        case TYPES.MULTIPLY_BY_TWO:
            return { value: state.value * action.payload };
        default:
            break;
    }
}

export default function UseReducerComponent() {
    const [state, dispatch] = useReducer(reducerFun, initialState);
    const addOne = () => dispatch({ type: TYPES.ADD_ONE });
    const subtractOne = () => dispatch({ type: TYPES.SUBTRACT_ONE });
    const mulitiplyByTwo = () => dispatch({ type: TYPES.MULTIPLY_BY_TWO, payload: 2 });
    return (
        <div className="App">
            <h3 className="result">Results: {state.value}</h3>

            <div className="button--group">
                <button onClick={addOne}> Add 1 </button>
                <button onClick={subtractOne}> Subtract 1 </button>
                <button onClick={mulitiplyByTwo}> Multiply by 2 </button>
            </div>
        </div>
    )
}

/**
 * If initial state is primitive value like simple - number.
 * const [state, dispatch] = useReducer(reducer, 0);
 *
 * Then will write reducer case like below -
 *
 *  case TYPES.ADD_ONE:
      return state + 1;
 */

/**
 * If initial state is non-primitive value like object - shown in this example.
 * const initialState = {
    value: 0
};
const [state, dispatch] = useReducer(reducerFun, initialState);


Then will write reducer case like below -
  case TYPES.ADD_ONE:
            return { value: state.value + 1 };
 */