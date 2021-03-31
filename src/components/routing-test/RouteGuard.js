import React from 'react';
import { Route, Redirect } from "react-router-dom";

const RouteGuard = ({ component: Component, authenticate, ...rest }) => (
    <Route {...rest} render={(props) => (
        authenticate === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

export default RouteGuard;