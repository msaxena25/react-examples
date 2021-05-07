# react-examples

# https://www.npmjs.com/package/react-pro-sidebar

# https://www.npmjs.com/package/react-side-nav

React Icons: npm i react-icons

# https://react-icons.github.io/react-icons/icons?name=fa

> > Below Two packages are required to react data component

## https://www.npmjs.com/package/react-data-components

## https://www.npmjs.com/package/react-redux

> AG Grid

## https://www.ag-grid.com/react-grid/getting-started/

## https://www.npmjs.com/package/ag-grid-enterprise

QR Code

## https://www.npmjs.com/package/qrcode.react

## https://www.npmjs.com/package/qr-code-styling

## https://codesandbox.io/s/l8rwl?file=/src/App.js:0-878

## Redux packages

 "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.9",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",


# https://react-redux.js.org/tutorials/connect
The connect function takes two arguments, both optional:

mapStateToProps: called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.

mapDispatchToProps: this parameter can either be a function, or an object.

> If it’s a function, it will be called once on component creation. It will receive dispatch as an argument, and should return an object full of functions that use dispatch to dispatch actions.

> If it’s an object full of action creators, each action creator will be turned into a prop function that automatically dispatches its action when called. Note: We recommend using this “object shorthand” form.
Normally, you’ll call connect in this way:

