import React from 'react';
import { Route, Redirect } from "react-router-dom";

const RouteGuard = ({ component: Component, authenticate, ...rest }) => (
    // here we have passed authenticate as a param but we can also get this from a store or context api as well.
    <Route {...rest} render={(props) => (
        authenticate === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

export default RouteGuard;